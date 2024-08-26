
interface SingleDateProps {
  date: string
  image?: string
  onClick?: () => void
}

const SingleDate = (props: SingleDateProps) => {
  return (
    <div onClick={props.onClick} className="rounded-full w-7 h-7 flex justify-center items-center font-medium mx-auto overflow-hidden cursor-pointer hover:bg-slate-300 duration-200">
      {props.image && <img src={props.image} alt="" className='relative z-10 w-7 h-7 object-fill' />}
      <p className={`absolute z-20  ${props.image && 'text-white'}`}>
        {props.date.replace('d', '').replace(/^0/, '')}
      </p>
    </div>
  )
}

export default SingleDate