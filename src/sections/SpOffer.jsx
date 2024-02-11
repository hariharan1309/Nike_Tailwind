import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"

const SpOffer = () => {
  return (
    <section className="flex justify-wrap items-start max-xl:flex-col-reverse gap-10 max-container"> 
    {/* col reverse will make the image section onleft and content on right else content up follows by image */}
      <div className="flex-1">
        <img src={offer} alt="" width={773} height={687}  className="object-contain w-full" />
      </div>
      <div className="flex flex-1 flex-col justify-center mt-[5%]">
        {/*It is the Left Section on which need button on below */}
        <h2 className="font-palanquin capitalize text-4xl font-bold min-lg:max-w-lg">
            {/* no wrap will make it to be on the above line , on l device we have background side by */}
            <span className=" gradientcolor text-transparent bg-clip-text mt-3 inline"> Special</span>
            <span> Offer</span> 
        </h2>
          <p className=" mt-4 min-lg:max-w-lg info-text">{/*width reduced for small devices*/}
            Ensuring premium comfort and style , ourmeticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation and a touch of elegance.
          </p>
          <p className="mt-6 min-lg:max-w-lg  info-text">{/*width reduced for small devices*/}
            Our dedication to detail and excellence ensures your satisfaction.
          </p>
          <div className="mt-11 flex flex-row justify-between">
          <button className="flex justify-center items-start gap-2 px-7 py-4 max-sm:px-4 max-sm:py-3 text-xl leading-none gradientcolor rounded-full ">
            View Details
            <img src={arrowRight}alt="Shop Button" className="rounded-full ml-2 w-5 h-5" />
            </button>
            <button className="flex justify-center items-start gap-2 px-7 py-4 max-sm:px-4 max-sm:py-3 text-xl leading-none border-2 border-slate-gray bg-white text-slate-gray  rounded-full ">
              Learn more
            </button>
          </div>
      </div>
    </section>
    )
}

export default SpOffer