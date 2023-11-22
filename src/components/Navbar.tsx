const Navbar = () => {
  return (
    <nav className="navbar bg-inherit p-4 sticky top-0 z-50">
      <div className="flex-1">
        <img src="src/assets/ArtHub Logo.png" alt="arthub" className="w-[31.8 px] h-8 pr-4" />
        {/* <Link to="/"> */}
        <p className="text-zinc-600 text-2xl font-thin font-InterExtraLight tracking-[4.80px]">ART</p>
        <p className="text-zinc-950 text-2xl font-extrabold font-InterSemiBold tracking-[4.80px]">HUB</p>
        {/* </Link> */}
        <p className="divider divider-start font-semibold"></p>
        <p className="divider font-semibold">Art Market</p>
        <p className="divider font-semibold">Explore</p>
        <p className="divider divider-end font-semibold">More</p>
      </div>

      <div className="form-control relative px-10">
        <input type="text" placeholder="Search?" className="input input-bordered w-96" />
        <div className="absolute top-0 bottom-0 left-0">
          {/* <img src="src/assets/search icon.svg" className="w-[30px] h-[30px]" /> */}
        </div>
      </div>
      <div className="space-x-4">
        <button className="btn btn-neutral">Login</button>
        <button className="btn btn-neutral" title="profile">
          <svg
            fill="none"
            height="24"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.271 18.3457C4.271 18.3457 6.50002 15.5 12 15.5C17.5 15.5 19.7291 18.3457 19.7291 18.3457"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button className="btn btn-neutral" title="cart">
          <svg className="h-6 w-6" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
            <rect fill="none" height="256" width="256" />
            <path
              d="M184,184H69.8L41.9,30.6A8,8,0,0,0,34.1,24H16"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            />
            <circle
              cx="80"
              cy="204"
              fill="none"
              r="20"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            />
            <circle
              cx="184"
              cy="204"
              fill="none"
              r="20"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            />
            <path
              d="M62.5,144H188.1a15.9,15.9,0,0,0,15.7-13.1L216,64H48"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            />
          </svg>
        </button>
      </div>
    </nav>
  )
}
export default Navbar
