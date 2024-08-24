
const Header = () => {
  return (
    <div className="bg-white px-4 py-2.5 flex justify-between rounded-lg text-base mb-3">
      <div className="flex flex-row items-center">
        <p className="text-sm font-medium">Agustus</p>
        <i className="fa-solid fa-angle-down mt-1 ms-2"></i>
      </div>
      <i className="fa-solid fa-ellipsis-vertical mt-1"></i>
    </div>
  )
}

export default Header