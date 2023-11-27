import Banner from '../components/Banner'
import Menu from '../components/Menu'
import Navbar from '../components/Navbar'
import ProductList from '../components/ProductList'

const Home = () => {
  return (
    <div className="bg-inherit">
      <Navbar />
      <Menu />
      <Banner />
      <ProductList />
    </div>
  )
}

export default Home
