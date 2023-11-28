import { Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import { useAuth } from './providers/AuthProvider'
import GuardedRoute from './guard/GuardedRoute'

function App() {
  const { isLoggedIn } = useAuth()

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<GuardedRoute isRouteAccessible={!isLoggedIn} redirectRoute="/" />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route element={<GuardedRoute isRouteAccessible={isLoggedIn} redirectRoute="/" />}>
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}

export default App
