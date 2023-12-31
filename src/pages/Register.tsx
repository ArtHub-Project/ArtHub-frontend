import { FormEvent, useState } from 'react'
import { useAuth } from '../providers/AuthProvider'
import { NavLink, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const Register = () => {
  const { register } = useAuth()
  const navigate = useNavigate()
  const [newUsername, setNewUsername] = useState<string>('')
  const [newPassword, setNewPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [newName, setNewName] = useState<string>('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      if (newPassword.length < 5 || newUsername.length < 5) {
        toast.error('Username or Password too short!!')
        return
      }
      if (newPassword !== confirmPassword) {
        toast.error('Password not match!!')
        return
      }

      await register(newUsername, newPassword, newName)
      toast('Register Successful! 😘', {
        style: {
          borderRadius: '20px',
          background: '#CF1CB6',
          color: 'white',
        },
      })

      navigate('/login')
    } catch (err) {
      if (err instanceof Error) toast.error(err.message)
    }
  }
  return (
    <div onSubmit={handleSubmit} className="w-full h-screen flex ">
      <div className="static grid grid-cols-1 md:grid-cols-2 w-[1120px] h-[667px] bg-white rounded-2xl shadow m-auto">
        <div className="w-full h-[537px] hidden md:block ">
          <img className="absolute ml-4 mt-4 " src="/images/ArtHubLogo.svg" alt="" />
          <img className="rounded-l-2xl" src="/images/RegisterBackground.jpg" alt="" />
        </div>
        <div className="p-8 flex flex-col justify-normal">
          <form>
            <h2 className="text-zinc-900 text-[32px] font-bold">Almost There!</h2>
            <h6 className="text-zinc-400 text-base font-normal mb-4">We are excited to see you here...!</h6>
            <div className="form-control w-full  mb-4">
              <label className="label">
                <span className="label-text text-zinc-950 text-sm font-bold">Fullname</span>
              </label>
              <input
                type="text"
                placeholder="Fisrt Name Last Name"
                className="input input-bordered w-full bg-white focus:border-[#CF1CB6]"
                onChange={(e) => {
                  setNewName(e.target.value)
                }}
                required
              />
            </div>
            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text text-zinc-950 text-sm font-bold ">Username</span>
              </label>
              <input
                type="text"
                placeholder="Username"
                className="input input-bordered w-full bg-white focus:border-[#CF1CB6]"
                onChange={(e) => {
                  setNewUsername(e.target.value)
                }}
                required
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-password text-zinc-950 text-sm font-bold ">Password</span>
              </label>
              <input
                type="password"
                placeholder="************"
                className="input input-bordered w-full bg-white focus:border-[#CF1CB6]"
                onChange={(e) => {
                  setNewPassword(e.target.value)
                }}
                required
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-password text-zinc-950 text-sm font-bold ">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="************"
                className="input input-bordered w-full bg-white focus:border-[#CF1CB6]"
                onChange={(e) => {
                  setConfirmPassword(e.target.value)
                }}
                required
              />
            </div>
            <button className=" my-6  btn btn-block mb-  text-white bg-[#CF1CB6] border-[#CF1CB6] hover:bg-[#A3068D] hover:border-[#A3068D]">
              Sign up
            </button>
            <div className="space-y-0">
              <p className="text-zinc-950 text-sm font-normal text-center mb-16px">
                Have an account?
                <NavLink to="/login" className=" text-[#CF1CB6] hover:text-[#A3068D]">
                  {` Sign In`}
                </NavLink>
              </p>
              <p className=" my-4 text-zinc-950 text-sm font-normal text-center">
                By Signing up, you agree our
                <span className=" text-[#CF1CB6] hover:text-[#A3068D]">
                  <a href=""> Terms & Condition</a>
                </span>
                <p className="inline"> and</p>{' '}
                <span className=" text-[#CF1CB6] hover:text-[#A3068D]">
                  <a href="">Policy Privacy</a>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
