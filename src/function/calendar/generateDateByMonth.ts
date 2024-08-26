const generateDateByMonth = (year: number, month: number) => {
  // Fungsi yang menghasilkan tanggal dalam bulan yang dipilih
  let dates = [];
  let totalDays = new Date(year, month, 0).getDate(); // Total hari dalam bulan tersebut

  for (let i = 1; i <= totalDays; i++) {
    dates.push({
      date: `d${i.toString().padStart(2, '0')}`, // format d01, d02, ...
      image: '',
      note: '',
      month: `m${month}`,
      year: `y${year}`
    });
  }

  return dates;
}

export default generateDateByMonth