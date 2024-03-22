
export const Button = ({iconURL, label, backgroundColor, borderColor, textColor}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7
        py-4 border font-montserrat text-lg rounded-full leading-none
          ${backgroundColor ? `${backgroundColor} ${borderColor} ${textColor}` : 'bg-coral-red text-white border-coral-red'}`} >
        {label}
        {
          iconURL && 
          <img src={iconURL} alt="arrow rigth icon"
          className="ml-2 rounded-full w-5 h-5"
      />
        }
    </button>
  )
}
