import { Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  )
}

export default App
