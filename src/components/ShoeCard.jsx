
const ShoeCard = ({image,bigImg,setBigImg}) => {
  return (
          <div className={`border-2 rounded-xl ${bigImg===image.img ? 'border-orange-400':'border-transparent'} cursor-pointer max-sm:flex-1`} >
            <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 max-sm:p-4 rounded-xl">
              <img 
              className="object-contain "
                src={image.img}
                width={127}
                height={103}
                alt="Object of Shoes" 
                onClick={()=>{
                  image.img!== bigImg ? setBigImg(image.img) : console.log("same image");
                  }
                }
              />
            </div>
            </div>  
          )
}

export default ShoeCard;