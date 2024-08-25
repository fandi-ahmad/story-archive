interface HeaderNavbarType {
  btnLeft: () => void
  btnRight: () => void
  text: string
}

const HeaderNavbar = (props: HeaderNavbarType) => {
  return (
    <div className="w-full text-sm font-medium mt-3 flex justify-center items-center">
      <div className="flex flex-row">
        <button onClick={props.btnLeft} className="hover:bg-slate-300 duration-200 text-slate-600 rounded-full w-5 h-5 flex items-center justify-center">
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <p className="mx-3">{props.text}</p>
        <button onClick={props.btnRight} className="hover:bg-slate-300 duration-200 text-slate-600 rounded-full w-5 h-5 flex items-center justify-center">
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
  )
}

export default HeaderNavbar