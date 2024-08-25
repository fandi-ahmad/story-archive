const getEmptySpaces = (yearNum: number, monthNum: number) => {
  const year = yearNum
  const month = monthNum - 1

  // Dapatkan hari pertama dari bulan tersebut
  const firstDayIndex = new Date(year, month, 1).getDay();

  // Buat grid dengan mengisi ruang kosong di depan jika bulan tidak mulai dari Minggu
  return Array(firstDayIndex).fill(null);
}

export default getEmptySpaces