import Banner from '../components/Banner'
import Menu from '../components/Menu'

import ProductList from '../components/ProductList'

const Home = () => {
  return (
    <div className="bg-inherit">
      <Menu />
      <Banner />
      <ProductList />
    </div>
  )
}

export default Home
