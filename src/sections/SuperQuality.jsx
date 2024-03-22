import { arrowRight } from "../assets/icons"
import { shoe8 } from "../assets/images"
import { Button } from "../components"

export const SuperQuality = () => {
  return (
    <section  id="about-us" className="flex items-center  justify-between max-lg:flex-col
      gap-10 w-full max-container
    ">
      <div className="flex flex-1 flex-col" >
          <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg
          " >
            We provide you 
            <span className="text-coral-red" > Super</span>
            <span className="text-coral-red" > Quality </span>
            shoes
          </h2>
          <p className="mt-4 lg:max-w-lg info-text
          " >
            Introducing the latest wave of Nike's cutting-edge arrivals, meticulously crafted to elevate your active lifestyle. Dive into a realm where style seamlessly merges with unparalleled comfort and groundbreaking innovation.
          </p>
          <p className="mt-6 lg:max-w-lg info-text" >Nike's newest offerings are designed to empower your every step.</p>
          
          <div className="mt-11" >
            <Button label="View details"/>
          </div>
          
      </div>
      <div className="flex flex-1 justify-center items-center" >
        <img src={shoe8} alt='shoe 8' width={570} height={522} className="object-contain" />
      </div>
    </section>
  )
}
