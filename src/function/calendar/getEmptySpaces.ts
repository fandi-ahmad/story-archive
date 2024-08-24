const getEmptySpaces = (yearNum: number, monthNum: 1|2|3|4|5|6|7|8|9|10|11|12) => {
  const year = yearNum
  const month = monthNum - 1

  // Dapatkan hari pertama dari bulan tersebut
  const firstDayIndex = new Date(year, month, 1).getDay();

  // Buat grid dengan mengisi ruang kosong di depan jika bulan tidak mulai dari Minggu
  return Array(firstDayIndex).fill(null);
}

export default getEmptySpaces