interface ImagePreviewModalProps {
  src: string
  onClick: () => void
}

const ImagePreviewModal = (props: ImagePreviewModalProps) => {
  return (
    <div className="mb-4">
      <img src={props.src} alt="" className="h-40 mx-auto mb-2" />
      <div className="text-xl w-full flex justify-start">
        <button onClick={props.onClick} title="Delete" className="hover:text-red-500 duration-200">
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  )
}

export default ImagePreviewModal