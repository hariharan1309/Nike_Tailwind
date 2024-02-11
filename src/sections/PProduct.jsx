import { star } from "../assets/icons"
import { shoe4,shoe5,shoe6,shoe7 } from "../assets/images"

const PProduct = () => {
  const products=[
    {name:"Sparx",img:shoe4,price:`Rs.950`,rating:4.5},
    {name:"Walkaro",img:shoe5,price:"Rs.1099",rating:4.1},
    {name:"Reebok",img:shoe6,price:"Rs.999",rating:4.0},
    {name:"Puma",img:shoe7,price:"Rs.1499",rating:4.7}
  ]
  return (
    <section>
        <div className="max-container max-sm:mt-12" id="pProduts ">
          <div className="flex flex-col  justify-start gap-5">
            <h2 className="text-4xl font-palanquin font-bold">Our 
              <span className="gradientcolor text-transparent bg-clip-text"> Popular </span>
              Products
            </h2>
            <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Experience the top-notch quality and style with our sought-after selection...</p>
          </div>
          <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
            {products.map((product)=>(
              <div key={product.name} className="flex flex-1 flex-col w-full max-sm:w-full">
                <img src={product.img} alt={product.name} className="w-[280px] h-[280px] shadow-sm rounded-xl hover:scale-105" />
                <div className="mt-8 flex justify-start gap-2.5">
                  <img src={star} alt={product.rating} />
                  <p className="text-xl text-slate-gray font-montserrat leading-normal">({product.rating})</p>
                </div>
                  <h3 className="font-semibold font-palanquin mt-2 text-2xl leading-normal">{product.name}</h3> 
                  <span className="font-semibold gradientcolor text-transparent bg-clip-text font-montserrat leading-normal text-lg mt-2 ">{product.price}</span>
              </div>
            ))}
          </div>
        </div>
    </section>
  )
}

export default PProduct