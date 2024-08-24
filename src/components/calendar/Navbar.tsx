
const Navbar = () => {
  return (
    <div className="w-full flex justify-between text-xl">
      <button className="w-full py-1 border-b-2 border-b-slate-800">
        <i className="fa-solid fa-calendar-days"></i>
      </button>
      <button className="w-full py-1 border-b-2 border-b-slate-400 text-slate-400">
        <i className="fa-solid fa-location-dot"></i>
      </button>
    </div>
  )
}

export default Navbar