const Register = () => {
  return (
    <div className="w-full h-screen flex ">
      <div className="static grid grid-cols-1 md:grid-cols-2 w-[1120px] h-[667px] bg-white rounded-2xl shadow m-auto">
        <div className="w-full h-[537px] hidden md:block ">
          <img className="absolute ml-4 mt-4 " src="src/assets/ArtHub Logo.svg" alt="" />
          <img className="rounded-l-2xl" src="src/assets/Register Background.jpg" alt="" />
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
                placeholder="Type your first name and last name"
                className="input input-bordered w-full bg-white focus:border-[#CF1CB6]"
              />
            </div>
            <div className="form-control w-full  mb-4">
              <label className="label">
                <span className="label-text text-zinc-950 text-sm font-bold ">Username</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full bg-white focus:border-[#CF1CB6]"
              />
            </div>
            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-password text-zinc-950 text-sm font-bold ">Password</span>
              </label>
              <input
                type="password"
                placeholder="Type Password"
                className="input input-bordered w-full bg-white focus:border-[#CF1CB6]"
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-password text-zinc-950 text-sm font-bold ">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Comfirm Password"
                className="input input-bordered w-full bg-white focus:border-[#CF1CB6]"
              />
            </div>
            <button className=" my-6  btn btn-block mb-  text-white bg-[#CF1CB6] border-[#CF1CB6] hover:bg-[#A3068D] hover:border-[#A3068D]">
              Sign up
            </button>
            <div className="space-y-0">
              <p className="text-zinc-950 text-sm font-normal text-center mb-16px">
                have an account?{' '}
                <span className=" text-[#CF1CB6] hover:text-[#A3068D]">
                  <a href="">Sign In</a>
                </span>
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
