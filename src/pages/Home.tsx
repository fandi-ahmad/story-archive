import { Key, useEffect, useState } from "react";
import SingleDate from "../components/SingleDate"
import Header from "../components/Header";
import Navbar from "../components/calendar/Navbar";
import { generateDateByMonth, getEmptySpaces, mergeCalendarData, generateMonthName } from "../function/calendar";
import { ReadDayApi } from "../function/calendarData";
import HeaderNavbar from "../components/calendar/HeaderNavbar";

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
  }, [selectedMonth])


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

        <div className="grid grid-cols-7 gap-2 mt-4">
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

          {dates && dates.map((item: any, index: Key) => (
            <SingleDate key={index} date={item.date} image={item.image} onClick={() => console.log(item)} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home