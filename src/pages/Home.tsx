import { Key, useEffect, useState } from "react";
import SingleDate from "../components/SingleDate"
import Header from "../components/Header";
import Navbar from "../components/calendar/Navbar";
import { generateDateByMonth, getEmptySpaces, mergeCalendarData, generateMonthName } from "../function/calendar";
import { ReadDayApi, WriteDayApi } from "../function/calendarData";
import HeaderNavbar from "../components/calendar/HeaderNavbar";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import Modal from "../components/Modal";
import TextInput from "../components/input/TextInput";
import TextareaInput from "../components/input/TextareaInput";
import BaseButton from "../components/BaseButton";
import { DayDataRenderType } from "../interface";

const Home = () => {
  const [dates, setDates] = useState<any | any[]>()
  const [emptySpaces, setEmptySpaces] = useState<any | any[]>()
  const [selectedMonth, setSelectedMonth] = useState<number>(8)

  const generateCalendarMonth = (year: number, month: number) => {
    // Buat key bulan yang secara eksplisit bertipe 'm1' | 'm2' | 'm3' | ... | 'm12'
    const monthKey = `m${month}` as keyof typeof calendarData.y2024;
  
    // Akses data dari Firebase menggunakan optional chaining dan berikan fallback ke objek kosong jika data tidak ada
    const firebaseYearData = calendarData?.y2024 || {};
    const firebaseMonthData = firebaseYearData[monthKey] || {};
  
    const generatedDates = generateDateByMonth(year, month);
    const mergedDates = mergeCalendarData(generatedDates, firebaseMonthData);
  
    return {
      dates: mergedDates,
      emptySpaces: getEmptySpaces(year, month),
    };
  };

  const [calendarData, setCalendarData] = useState<any | any[]>()

  const getDataCalendar = async () => {
    const data = await ReadDayApi()
    if (data) {
      setCalendarData(data)
    }
  }

  useEffect(() => {
    getDataCalendar()
  }, [])
  

  useEffect(() => {
    const data = generateCalendarMonth(2024, selectedMonth)
    setDates(data.dates)
    setEmptySpaces(data.emptySpaces)
  }, [selectedMonth, calendarData])

  
  const [fileBlob, setFileBlob] = useState<Blob | null>(null);
  const [fileUrl, setFileUrl] = useState<string>('')

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const blob = new Blob([file], { type: file.type });
      const url = URL.createObjectURL(blob);
      setFileBlob(blob);
      setFileUrl(url)
    }
  };

  const uploadFile = (year: string, month: string, dateFileName: string) => {
    const storage = getStorage();
    const storageRef = ref(storage, `${year}-${month}/${dateFileName}`);

    // 'fileBlob' comes from the Blob or File API
    if (fileBlob) {
      uploadBytes(storageRef, fileBlob)
    }
  }

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const [textNote, setTextNote] = useState<string>('')
  const [writeYear, setWriteYear] = useState<string>('')
  const [writeMonth, setWriteMonth] = useState<string>('')
  const [writeDate, setWriteDate] = useState<string>('')

  
  const generateUrlImageInDay = (day: DayDataRenderType) => {
    const storageUrl = import.meta.env.VITE_STAR_storageUrl
    const query = '?alt=media'
    const folder= day.year + '-' + day.month
    const filename = day.image
    const path = folder + '%2F' + filename
    return storageUrl + path + query
  }

  const setDayAndOpenModal = (day: DayDataRenderType) => {
    setIsOpenModal(true)
    setWriteYear(day.year)
    setWriteMonth(day.month)
    setWriteDate(day.date)
    setTextNote(day.note)
    if (day.image) {
      const url = generateUrlImageInDay(day)
      setFileUrl(url)
    } else {
      setFileUrl('')
    }
  }

  const uploadAndWriteData = async () => {
    const data: DayDataRenderType = {
      year: writeYear,
      month: writeMonth,
      date: writeDate,
      image: writeDate,
      note: textNote
    }

    WriteDayApi(data)
    uploadFile(writeYear, writeMonth, writeDate)
  }

  return (
    <div className="text-xs">
      <p className="text-white text-center text-2xl mb-4">The Last Day</p>
      <Header/>

      <div className="bg-white px-4 py-2 rounded-lg mb-3">
        <Navbar/>
        
        <HeaderNavbar
          btnLeft={() => setSelectedMonth(selectedMonth - 1)}
          btnRight={() => setSelectedMonth(selectedMonth + 1)}
          text={generateMonthName(selectedMonth) + ' 2024'}
        />

        <div className="grid grid-cols-7 gap-1 mt-4">
          <p className="text-center">Min</p>
          <p className="text-center">Sen</p>
          <p className="text-center">Sel</p>
          <p className="text-center">Rab</p>
          <p className="text-center">Kam</p>
          <p className="text-center">Jum</p>
          <p className="text-center">Sab</p>

          {emptySpaces && emptySpaces.map((_: any, index: any) => (
            <div key={`empty-${index}`} />
          ))}

          {dates && dates.map((item: DayDataRenderType, index: Key) => (
            <SingleDate key={index} date={item.date} image={item.image ? generateUrlImageInDay(item) : ''} onClick={() => setDayAndOpenModal(item)} />
          ))}
        </div>
      </div>

      <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
        { fileUrl && <img src={fileUrl} alt="" className="h-80 mx-auto mb-4" /> }
        <TextInput label="Upload gambar" type="file" onChange={handleFileChange} />
        <TextareaInput label="Keterangan" value={textNote} onChange={(e) => setTextNote(e.target.value)} />
        <div className="flex justify-end">
          <BaseButton onClick={uploadAndWriteData} color="green" text="Upload" textSize="text-sm" />
        </div>
      </Modal>
    </div>
  )
}

export default Home