import { Link } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'
import toast from 'react-hot-toast'
import useCart from '../hooks/useCart'

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth()
  const { cart } = useCart()

  const handleSubmit = () => {
    logout()
    toast('Logout Successful! 🥲', {
      style: {
        borderRadius: '20px',
        background: '#CF1CB6',
        color: 'white',
      },
    })
  }

  return (
    <nav className="navbar bg-white p-6 sticky top-0 z-50 shadow m-auto">
      <Link to="/">
        <img src="/images/ArtHubLogo.svg" />
      </Link>
      <div className="flex-1 text-zinc-600">
        <p className="divider divider-start font-semibold"></p>
        <p className="divider font-semibold">Art Market</p>
        <p className="divider font-semibold">Explore</p>
        <p className="divider divider-end font-semibold">More</p>
      </div>
      <div className="form-control relative px-10">
        <input
          type="text"
          placeholder="Search?"
          className="input w-64 bg-slate-50 focus:border-[#CF1CB6] border-transparent "
        />
        <div className="absolute top-0 bottom-0 left-0"></div>
      </div>
      <div className="space-x-4">
        {isLoggedIn ? (
          <div className="flex space-x-4">
            <div className="static">
              <Link to="/cart">
                <button
                  className="btn relative bg-slate-50 hover:bg-fuchsia-100 border-hidden text-zinc-600"
                  title="cart"
                >
                  {/* <img src="/images/CartIcon.svg" /> */}
                  <img src="/images/ShoppingCartHome.svg" />
                  Cart
                  {cart?.CartItem.length !== 0 ? (
                    <p className="absolute top-0 right-0 w-4 h-4 rounded-xl bg-[#CF1CB6] text-white text-xs">
                      {cart?.CartItem.length}
                    </p>
                  ) : (
                    ''
                  )}
                </button>
              </Link>
            </div>
            <div>
              <button
                onClick={handleSubmit}
                className="btn bg-slate-50 hover:bg-fuchsia-100 border-hidden text-zinc-600"
                title="cart"
              >
                {/* <img src="/images/LogoutIcon.svg" /> */}
                <img src="/images/LogoutHome.svg" />
                Logout
              </button>
            </div>
            <div>
              <Link to="/create">
                <button className="btn bg-slate-50 hover:bg-fuchsia-100 border-hidden text-zinc-600">
                  {/* <img src="/images/AddIcon.svg" /> */}
                  <img src="/images/AddHome.svg" />
                  Add
                </button>
              </Link>
            </div>
            <div className="avatar">
              <div className="w-12 rounded-3xl">
                <img src="/images/ProfileIcon.svg" />
              </div>
            </div>
          </div>
        ) : (
          <div className="space-x-4">
            <Link to="/login">
              <button className="btn bg-slate-50 hover:bg-fuchsia-100 border-hidden text-zinc-600">
                {/* <img src="/images/LoginIcon.svg" /> */}
                <img src="/images/LoginHome.svg" />
                Login
              </button>
            </Link>
            <Link to="/register">
              <button
                className="btn bg-slate-50  hover:bg-fuchsia-100 border-hidden text-zinc-600"
                title="profile/register"
              >
                {/* <img src="/images/RegisterIcon.svg" /> */}
                <img src="/images/RegisterHome.svg" />
                Register
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
export default Navbar
