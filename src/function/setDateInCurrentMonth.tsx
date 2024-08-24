const setDateInCurrentMonth = () => {
  // Fungsi untuk mendapatkan jumlah hari di bulan dan tahun tertentu
  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Mendapatkan bulan dan tahun saat ini
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth(); // Bulan sekarang (0-11)
  const currentYear = currentDate.getFullYear(); // Tahun sekarang

  // Jumlah hari di bulan ini
  const daysInMonth = getDaysInMonth(currentMonth, currentYear);

  // Membuat array dari semua tanggal di bulan ini (1 sampai daysInMonth)
  const datesArray = Array.from({ length: daysInMonth }, (_, index) => (index + 1).toString());

  // Mendapatkan hari pertama bulan ini (0 untuk Minggu, 1 untuk Senin, dst.)
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  // Buat array placeholder untuk hari sebelum tanggal 1 di bulan ini
  const leadingEmptyDays = Array.from({ length: firstDayOfMonth }, () => '');

  // Gabungkan placeholder dengan tanggal bulan ini
  const calendarDays = [...leadingEmptyDays, ...datesArray];

  return calendarDays
}

export default setDateInCurrentMonth