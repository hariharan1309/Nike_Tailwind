import { copyrightSign, facebook, instagram, twitter } from "../assets/icons";
import {footerLogo} from "../assets/images";
const Footer = () => {
  const SocialMedia=[
    {img:facebook,label:"Facebook"},
    {img:instagram,label:"Instagram"},
    {img:twitter,label:"Twitter"}    
  ];
  const footerLink=[
    {
      title:"Products",
      links:[
        {name:"Sparx",link:"/"},
        {name:"Walkaro",link:"/"},
        {name:"Campus",link:"/"},
        {name:"Asian",link:"/"},
        {name:"Reebok",link:"/"}
      ]
    },
    {
      title:"Help",
      links:[
        {name:"About us",link:"/"},
        {name:"FAQs",link:"/"},
        {name:"How it works",link:"/"},
        {name:"privacy policy",link:"/"},
        {name:"payment policy",link:"/"}
      ]
    },
    {
      title:"Get in touch",
      links:[
        {name:"customercare@nike.com",link:"/"},
        {name:"+9255486254",link:"/"},
      ]
    }
  ]
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col ">
        <div className="flex flex-col items-start">
          <a href="/"><img src={footerLogo} alt="" width={150} height={45} /></a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white sm:max-w-sm">Get shoes ready for the new term at your nearest Nike store. Find your perfect size in store. Get rewards.</p>
          <div className="flex items-center gap-5 mt-8">
            { SocialMedia.map((icon)=>(
              <div key={icon.label} className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <img src={icon.img} width={24} height={24} alt={icon.label} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1  justify-between lg:gap-10 gap-20 flex-wrap">
            {footerLink.map((foot)=>(
              <div key={foot}>
                <h4 className="text-white  font-montserrat leading-normal text-2xl font-medium mt-6">
                  {foot.title}
                </h4>
                <ul>
                  {foot.links.map((link)=>(
                    <li key={link.name} className="text-white mt-3 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer">
                      <a href={link.link}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
      <div className="flex justify-between text-white mt-24 max-md:flex-col max-md:items-center">
            <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
              <img src={copyrightSign} alt="copyright" width={20} height={20} className="rounded-full m-0"/>
              <p>Copyright. All rights reserved.</p>

            </div>
            <p className="font-montserrat cursor-pointer">Terms & conditions</p>
      </div>
    </footer>
    )
}

export default Footer;