
const Subscribe = () => {
  return (
    <section className="max-container flex justify-evenly items-center max-lg:flex-col-reverse gap-10" id="contact-us">
        <h3 className="text-4xl leading-[68px] lg:max-w-lg font-palanquin font-bold ">Sign Up from <span className="gradientcolor text-transparent bg-clip-text ">Updates </span> & Newsletter </h3>
        <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
          <input type="text" placeholder="subscribe@nike.com" className="input"/>
          <div className="flex max-sm:justify-end items-center max-sm:w-full m-0">
          <button className="flex justify-center items-start gap-2 px-7 py-4 max-sm:px-4 max-sm:py-3 text-xl leading-none gradientcolor rounded-full text-white ">
              Sign up
            </button>
          </div>
        </div>
    </section>
  )
}

export default Subscribe;