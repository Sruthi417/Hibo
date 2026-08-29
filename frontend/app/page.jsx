import Hero from "../components/Hero/Hero"
import Navbar from "../components/Nav/Navbar"
import Brands from "../components/Brands/Brand"
import Feature from "../components/Features/Feature"
import Process from "../components/Process/Process"
import Review from "../components/Review/Review"

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Brands/>
      <Feature/>
      <Process/>
      <Review/>
    </div>
  )
}

export default page