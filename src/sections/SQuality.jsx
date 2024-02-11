import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";

const SQuality = () => {
  return (
    <section id="about-us" className=" flex justify-evenly items-center max-lg:flex-col gap-10 w-full max-container ">
      <div className="flex flex-1 flex-col">{/*It is the Left Section on which need button on below */}
        <h2 className="font-palanquin capitalize text-4xl font-bold lg:max-w-lg">
            <span >We Provide You</span>         
            {/* no wrap will make it to be on the above line , on l device we have background side by */}
            <span className=" gradientcolor text-transparent bg-clip-text mt-3 inline"> Super Quality</span> Shoes
        </h2>
          <p className=" mt-4 lg:max-w-lg info-text">{/*width reduced for small devices*/}
            Ensuring premium comfort and style , ourmeticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation and a touch of elegance.
          </p>
          <p className="mt-6 lg:max-w-lg info-text">{/*width reduced for small devices*/}
            Our dedication to detail and excellence ensures your satisfaction.
          </p>
          <div className="mt-11">
            <button className="flex justify-center items-start gap-2 px-7 py-4 text-xl leading-none gradientcolor rounded-full ">
              View Details
              <img src={arrowRight}alt="Shop Button" className="rounded-full ml-2 w-5 h-5" />
            </button>
          </div>
      </div>
      {/* Left Image  */}
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="Super Shoe" width={570} height={520} className="object-contain" />
      </div>{/*Check on the Original and go further */}
    </section>
    )
}

export default SQuality;