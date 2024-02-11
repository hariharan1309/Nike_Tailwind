import { star } from "../assets/icons"
import {customer1,customer2} from '../assets/images';
const CReview = () => {
  const reviwes = [
    {img:customer1,name:"Hariharan",feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",rating:4.5},
    {img:customer2,name:"Kalaivani",feedback:"The product not only met but exceeded my expectations. I'll definitely be a returning customer!",rating:4.1}
      ];
  return (
    <section>
      <div className="max-container">
        <h3 className="text-4xl font-bold font-palanquin  text-center">
          What Our 
          <span className="gradientcolor text-transparent bg-clip-text"> Customers </span>
          Say?
        </h3>
        <p className="info-text m-auto mt-5 max-w-lg text-center">
        Hear genuine stories from our satisfied customers about their exceptional experiences with us.
        </p>
        <div className="m-24 flex justify-evenly items-center max-lg:flex-col gap-15 max-sm:m-10 "> 
          {reviwes.map((review)=>(
            <div key={review.name} className='flex justify-center items-center flex-col'> {/*flex-col will make those review to appear */}
              <img src={review.img} alt='Customer' className='rounded-full object-cover w-[120px] h-[120px]' />
              <p className="text-center info-text max-w-sm mt-5">{review.feedback}</p>
              <div className="mt-3 flex justify-center items-center gap-2">
                <img src={star} width={24} height={24} className="object-contain m-0"/>
                <p className="text-xl font-montserrat text-slate-gray">({review.rating})</p>
              </div>
              <h4 className="font-bold font-palanquin text-3xl mt-1 text-center">{review.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CReview;