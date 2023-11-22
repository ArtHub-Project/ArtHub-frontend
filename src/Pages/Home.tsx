import Banner from '../components/Banner'
import Menu from '../components/Menu'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'

const Home = () => {
  return (
    <>
      <div className="bg-inherit">
        <Navbar />
        <Menu />
        <Banner />
        <ProductCard />
      </div>
    </>
  )
}

export default Home
