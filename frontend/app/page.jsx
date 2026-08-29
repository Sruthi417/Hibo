import Hero from "../components/Hero/Hero"
import Navbar from "../components/Nav/Navbar"
import Brands from "../components/Brands/Brand"
import Feature from "../components/Features/Feature"

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Brands/>
      <Feature/>
    </div>
  )
}

export default page