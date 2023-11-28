import { Link } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth()

  return (
    <nav className="navbar bg-white p-4 sticky top-0 z-50 shadow m-auto">
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
          className="input w-96 bg-slate-50 focus:border-[#CF1CB6] border-transparent "
        />
        <div className="absolute top-0 bottom-0 left-0"></div>
      </div>
      <div className="space-x-4">
        <Link to="/login">
          <button className="btn bg-slate-50 hover:bg-fuchsia-100 border-hidden">
            <img src="/images/Moon.svg" />
          </button>
        </Link>
        <Link to="/register">
          <button className="btn bg-slate-50  hover:bg-fuchsia-100 border-hidden" title="profile/register">
            <img src="/images/LoveChat.svg" />
          </button>
        </Link>
        <Link to="/cart">
          <button className="btn bg-slate-50 hover:bg-fuchsia-100 border-hidden" title="cart">
            <img src="/images/ShoppingCart.svg" />
          </button>
        </Link>
        {isLoggedIn ? (
          <div>
            <button onClick={logout} className="btn bg-slate-50 hover:bg-fuchsia-100 border-hidden" title="cart">
              Logout
            </button>
          </div>
        ) : (
          <div>
            <div className="text-primary-50">
              <p>annmalaew</p>
            </div>
            <div className="text-xs">
              <p>@annmalaew</p>
            </div>
          </div>
        )}
        <div className="avatar">
          <div className="w-12 rounded-3xl">
            <img src="/images/sunturs/suntur1.jpeg" />
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
