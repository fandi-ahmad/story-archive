const mergeCalendarData = (dates: any[], firebaseData: any) => {
  return dates.map((item) => {
    const firebaseDayData = firebaseData?.[item.date];
    return {
      ...item,
      image: firebaseDayData?.image || item.image,  // Menggunakan data Firebase jika ada
      note: firebaseDayData?.note || item.note      // Menggunakan data Firebase jika ada
    };
  });
};

export default mergeCalendarData