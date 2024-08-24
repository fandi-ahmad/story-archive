import { MonthType } from "../../interface";

const generateDateByMonth = (data: MonthType) => {
  // Buat array dari data bulan, hilangkan 'd' dan '0' jika ada
  return Object.entries(data).map(([key, value]) => {
    const date = key.replace('d', '').replace(/^0/, ''); // Hilangkan 'd' dan '0' depan
    return { date, image: value.image };
  });
}

export default generateDateByMonth