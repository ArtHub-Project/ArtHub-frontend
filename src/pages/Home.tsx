import { AllProducts } from '../components/AllProducts'
import Banner from '../components/Banner'
import Menu from '../components/Menu'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className="bg-inherit">
      <Navbar />
      <Menu />
      <Banner />
      <AllProducts />
    </div>
  )
}

export default Home
