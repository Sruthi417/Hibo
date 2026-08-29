import Hero from "../components/Hero/Hero"
import Navbar from "../components/Nav/Navbar"
import Brands from "../components/Brands/Brand"

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Brands/>
    </div>
  )
}

export default page