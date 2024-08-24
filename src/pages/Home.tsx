import { Key } from "react";
import SingleDate from "../components/SingleDate"
import Header from "../components/Header";
import Navbar from "../components/calendar/Navbar";
import dataExample from '../data/dataExample.json'
import { generateDateByMonth, getEmptySpaces } from "../function/calendar";

const Home = () => {
  const monthData = dataExample.calendar.y2024.m1
  const dates = generateDateByMonth(monthData)
  const emptySpaces = getEmptySpaces(2024, 8)

  return (
    <div className="text-xs">
      <p className="text-white text-center text-2xl mb-4">The Last Day</p>
      <Header/>

      <div className="bg-white px-4 py-2 rounded-lg mb-3">
        <Navbar/>

        <div className="grid grid-cols-7 gap-2 mt-4">
          <p className="text-center">Min</p>
          <p className="text-center">Sen</p>
          <p className="text-center">Sel</p>
          <p className="text-center">Rab</p>
          <p className="text-center">Kam</p>
          <p className="text-center">Jum</p>
          <p className="text-center">Sab</p>

          {emptySpaces.map((_, index) => (
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