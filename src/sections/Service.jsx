import { shieldTick, support, truckFast } from "../assets/icons"

const Service = () => {
  const services=[
    {img:truckFast,label:"Shipping ",sub_text:"Enjoy seamless shopping with our complimentary shipping service."},
    {img:shieldTick,label:"Secure Payment ",sub_text:"Enjoy stress free transactions with our secure payment service."},
    {img:support,label:"Love to help you ",sub_text:"Our dedicated team is here to assist you every step of the way."}

  ]
  return (
    <section className="max-container flex flex-wrap gap-9 justify-center">
      {services.map((service)=>(
        <div key={service.label} className="flex-1 flex sm:w-[300px] sm:min-w-[350px] w-full rounded-3xl shadow-3xl px-10 py-16 flex-col">
          <div className="w-11 h-11 flex justify-center items-center gradientcolor rounded-full">
          <img src={service.img} alt={service.label} height={24} width={24} />
          </div>
          <h2 className="mt-5 leading-normal text-3xl font-bold palanquin">{service.label}</h2>
          <p className="info-text mt-3 break-words">{service.sub_text}</p>
        </div>
      ))}
    </section>
  )
}

export default Service