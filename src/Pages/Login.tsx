import loginBackground from '../assets/LoginBackground.jpg'
import arthubLogo from '/public/images/arthubLogo.svg'

const Login = () => {
  return (
    <div className="w-full h-screen flex ">
      <div className="static grid grid-cols-1 md:grid-cols-2 w-[1120px] h-[537px] bg-white rounded-2xl shadow m-auto">
        <div className="w-full h-[537px] hidden md:block ">
          <img className="absolute ml-4 mt-4 " src={arthubLogo} alt="" />
          <img className="rounded-l-2xl" src={loginBackground} alt="" />
        </div>
        <div className="p-12 flex flex-col justify-normal">
          <form>
            <h2 className="text-zinc-900 text-[32px] font-bold">Welcome back</h2>
            <h6 className="text-zinc-400 text-base font-normal mb-4">Welcome back! please enter your account</h6>
            {/* <div>
              <p>Icon Fcebook</p>
              <p>Icon X</p>
              <p>Icon Google</p>
            </div> */}
            <div className="form-control w-full  mb-4">
              <label className="label">
                <span className="label-text text-zinc-950 text-sm font-bold ">Username</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full bg-white focus:border-primary-50"
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-password text-zinc-950 text-sm font-bold ">Password</span>
              </label>
              <input
                type="Password"
                placeholder="Type Password"
                className="input input-bordered w-full bg-white focus:border-primary-50"
              />
            </div>
            <div className="my-4 text-primary-50 hover:text-primary-80">
              <a href="">Forget Password</a>
            </div>

            <button className=" btn btn-block mb-4  text-white bg-primary-50 border-primary-50 hover:bg-primary-80 hover:border-primary-80">
              Sign in
            </button>
            <p className="text-zinc-950 text-sm font-normal text-center">
              Don’t have an account?{' '}
              <span className=" text-primary-50 hover:text-primary-80">
                <a href="">Sign Up</a>
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
