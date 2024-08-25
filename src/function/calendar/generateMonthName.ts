const generateMonthName = (m: number) => {
  const monthNames = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  return monthNames[m - 1];
};

export default generateMonthName