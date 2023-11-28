import { AllProducts } from '../components/AllProducts'
import Banner from '../components/Banner'
import Menu from '../components/Menu'

const Home = () => {
  return (
    <div className="bg-inherit">
      <Menu />
      <Banner />
      <AllProducts />
    </div>
  )
}

export default Home
