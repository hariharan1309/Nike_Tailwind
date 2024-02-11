import { CReview,Footer,Hero,PProduct,SQuality,Service,SpOffer, Subscribe} from "./sections"
import Nav from "./components/Nav"
//  Always try to use classes to reuse instead of actual implementation like button etc..,
const App = () => {
  return (
    <div className='relative'>
      <Nav></Nav>
     <section className='xl:padding-l wide:padding-r padding-b'>
        {/* These classes were created on index.csss */}
        <Hero></Hero>
      </section>
      <section className="padding">
        <PProduct></PProduct>
      </section>
      <section className="padding">
        <SQuality></SQuality>
      </section>
      <section className="padding-x py-10">
        <Service></Service>
      </section>
      <section className="padding">
        <SpOffer></SpOffer>
      </section>
      <section className="bg-orange-50 padding">
        <CReview></CReview>
      </section>
      <section className="padding-x sm:py-32 py-16 w-full ">{/*padding-x will make the padding on l&r  */}
        <Subscribe></Subscribe>
      </section>
      <section className="bg-black  padding-x padding-t pb-8">
        <Footer></Footer>
      </section>
    </div>
  )
}

export default App