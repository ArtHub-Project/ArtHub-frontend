import { NavLink, useNavigate } from 'react-router-dom'
import { FormEvent, useState } from 'react'
import { useAuth } from '../providers/AuthProvider'
import toast from 'react-hot-toast'
import useCart from '../hooks/useCart'

const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { fetchCart } = useCart()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      await login(username, password).then(async () => {
        await toast.success('Logged In Successfully !'), fetchCart(0)
      })
      navigate('/')
    } catch (err) {
      if (err instanceof Error) toast.error(err.message)
    }
  }

  return (
    <div className="w-full h-screen flex " onSubmit={handleSubmit}>
      <div className="static grid grid-cols-1 md:grid-cols-2 w-[1120px] h-[537px] bg-white rounded-2xl shadow m-auto">
        <div className="w-full h-[537px] hidden md:block ">
          <img className="absolute ml-4 mt-4 " src="/images/ArtHubLogo.svg" alt="" />
          <img className="rounded-l-2xl" src="/images/LoginBackground.jpg" alt="" />
        </div>
        <div className="p-12 flex flex-col justify-normal">
          <form>
            <h2 className="text-zinc-900 text-[32px] font-bold">Welcome back</h2>
            <h6 className="text-zinc-400 text-base font-normal mb-4">Welcome back! please enter your account</h6>
            <div className="form-control w-full  mb-4">
              <label className="label">
                <span className="label-text text-zinc-950 text-sm font-bold ">Username</span>
              </label>
              <input
                type="text"
                placeholder="Please Input Username"
                onChange={(e) => setUsername(e.target.value)}
                className="input input-bordered w-full bg-white focus:border-[#CF1CB6]"
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-password text-zinc-950 text-sm font-bold ">Password</span>
              </label>
              <input
                type="Password"
                placeholder="Please Input Password"
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered w-full bg-white focus:border-[#CF1CB6]"
              />
            </div>
            <div className="my-4 text-[#CF1CB6] hover:text-[#A3068D]">
              <a href="">Forget Password</a>
            </div>

            <button
              type="submit"
              value="login"
              className=" btn btn-block mb-4  text-white bg-[#CF1CB6] border-[#CF1CB6] hover:bg-[#A3068D] hover:border-[#A3068D]"
            >
              Sign in
            </button>
            <p className="text-zinc-950 text-sm font-normal text-center">
              <NavLink to="/register" className=" text-[#CF1CB6] hover:text-[#A3068D] ">
                {`Don't have an account? Register`}
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
