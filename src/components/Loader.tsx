import { useGlobalState } from "../hook/useGlobalState"

const Loader = () => {
  const [isOpenLoader] = useGlobalState('isOpenLoader')

  return isOpenLoader ?
    <div className="absolute z-50 top-0 left-0 w-screen h-screen bg-black bg-opacity-40 flex justify-center items-center">
      <div className="flex-col gap-4 flex items-center justify-center ms-2">
        <div className="w-14 h-14 border-8 text-blue-400 text-4xl animate-spin border-white flex items-center justify-center border-t-blue-400 rounded-full">
        </div>
      </div>
    </div>
  : null
}

export default Loader