
interface SingleDateProps {
  date: string
  image?: string
  onClick?: () => void
}

const SingleDate = (props: SingleDateProps) => {
  return (
    <div onClick={props.onClick} className="rounded-full w-8 h-8 flex justify-center items-center font-medium mx-auto overflow-hidden cursor-pointer hover:bg-slate-300 duration-200">
      {props.image && <img src={props.image} alt="" className='w-full relative z-10' />}
      <p className={`absolute z-20  ${props.image && 'text-white'}`}>
        {props.date.replace('d', '').replace(/^0/, '')}
      </p>
    </div>
  )
}

export default SingleDate