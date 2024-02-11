import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1, bigShoe2,bigShoe3 } from "../assets/images";
import ShoeCard from '../components/ShoeCard';
const Hero = () => {
  const stats=[
    {value:"1K+", label:"Barnds"},
    {value:"500", label:"Shops"},
    {value:"250K+", label:"Customers"},
  ];
  const shoes=[
      {img:bigShoe1,id:1},
      {img:bigShoe2,id:2},
      {img:bigShoe3,id:3}
    ]
  const [bigImg,setBigImg]=useState(bigShoe1);
  return (
  <section
    id="home"
    className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container" //min-h-screen makes it full screen 
    // lg:flex-row makes it flex on large screens as single col and flex-col makes it flex on small screens as single row
  >
    {/* always use semantic tag */}
    <div className=" capitalize relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
      <p className="text-xl gradientcolor text-transparent bg-clip-text">our summer collection</p>
      <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold ">
        <span className="relative xl:bg-white xl:whitespace-nowrap z-20 pr-10 " >The New Arrival</span>         
        <br/>
        {/* no wrap will make it to be on the above line , on l device we have background side by */}
        <span className=" gradientcolor text-transparent bg-clip-text mt-3 inline-block">Nike </span> Shoes
        </h1>
      <p className="text-gray-400 font-montserrat my-6  leading-8 text-lg sm:max-w-sm">{/*width reduced for small devices*/}
        discover stylish nike arrivals quality comfort and innovation for your active lifestyle.
      </p>
      <button className="flex justify-center items-start gap-2 px-7 py-4 max-sm:px-4 max-sm:py-3 text-xl leading-none gradientcolor rounded-full ">
        Shop Now
        <img src={arrowRight}alt="Shop Button" className="rounded-full ml-2 w-5 h-5" />
      </button>
      {/* stats */}
      <div className=" flex justify-start flex-wrap items-start w-full gap-16 mt-20">
        {stats.map(({value,label})=>(
          <div key={label}>
            <p className="text-xl font-palanquin font-bold">{value}</p>
            <p className="text-gray-400 font-montserrat">{label}</p>
          </div>
        ))}
      </div>
    </div> 
    <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center rounded-xl">
      <img 
      src={bigImg} 
      alt="Current image shown" 
      width={610}
      height={500}
      className="object-contain relative z-10"
      />
        <div className='flex sm:gap-6 gap-4 absolute -bottom-[15%] sm:left-[10%] max-sm:px-6'>
        {/*absolute will make it to be on the top of the image which we further make it bottom to be better*/}
        {shoes.map((shoe)=>(
          <div key={shoe.id} className="hover:scale-105">
            <ShoeCard image={shoe} bigImg={bigImg} setBigImg={setBigImg}/>
          </div>
          )
        ) }
      </div>
    </div>
  </section>
)
}

export default Hero;