import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import { Button } from "../components"
import { statistics } from "../constants"

export const Hero = () => {
  return (
    <section 
      id="home"
      className="w-full py-2
        flex flex-col xl:flex-row justify-center min-h-screen gap-10
        max-container
      "
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start
          w-full max-xl:padding-x pt-28
          " >
          <p className="text-xl font-montserrat text-coral-red" >
            Our summer collection
          </p>
          <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px]
            max-sm:leading-[82px] font-bold
          " >
            <span className="xl:bg-white xl:whitespace-nowrap z-10 pr-10" >The new arrival</span>
            <br />
            <span className="text-coral-red inline-block mt-3" >Nike</span> shoes
          </h1>
          <p className="font-montserrat text-slate-gray text-lg leading-8
            mt-6 mb-14 sm:max-w-sm
          " >
            Discover stylish Nike arrivals, quality comfort, and 
            innovation for your active life.
          </p>
          <Button label="Shop now" iconURL={arrowRight}/>
          <div className="flex justify-start items-start flex-wrap
            w-full mt-20 gap-16" >
            {
              statistics.map( stats => (
                <div key={stats.label} >
                  <p className="text-4xl font-palanquin font-bold" > {stats.value}</p>
                  <p className="leading-7 font-montserrat text-slate-gray" > {stats.label} </p>
                </div>
              ))
            }
          </div>
      </div>
      <div className="flex flex-1 relative justify-center items-center xl:min-h-screen max-xl:py-40
        bg-primary bg-hero bg-cover bg-center
      " >
        <img src={bigShoe1} alt="shoe collection"
          width={610}
          height={500}
          className="object-contain z-10 relative"
        />
      </div>
    </section>
  )
}
