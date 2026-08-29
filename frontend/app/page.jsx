import Hero from "../components/Hero/Hero"
import Navbar from "../components/Nav/Navbar"
import Brands from "../components/Brands/Brand"
import Feature from "../components/Features/Feature"
import Process from "../components/Process/Process"
import Review from "../components/Review/Review"
import FAQ from "../components/Faq/Faq"
import Footer from "../components/Footer/Footer"

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Brands/>
      <Feature/>
      <Process/>
      <Review/>
      <FAQ/>
      <Footer/>
    </div>
  )
}

export default page