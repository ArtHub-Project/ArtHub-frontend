import Navbar from '../components/Navbar'

const Product = () => {
  return (
    <>
      <Navbar />
      <div className="font-medium p-4 text-sm breadcrumbs">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Category?</a>
          </li>
          <li>
            <p>Product?</p>
          </li>
        </ul>
      </div>
      <div className="w-full flex p-12">
        <div className="w-1/2 px-5">
          <img src="src/assets/Mockup4.jpg" />
        </div>
        <div className="w-1/2 px-5">
          <div className="pb-10">
            <div className="">
              <p className=" font-semibold text-2xl">
                Lorem ipsum began as scrambled, nonsensical Latin derived from Cicero's 1st-century BC text De Finibus
                Bonorum et Malorum.
              </p>
            </div>
            {/* <div className="flex flex-col justify-between"> */}
            <div className="flex pt-6">
              <div className="pr-4">
                <button className="btn btn-neutral" title="favorite">
                  <img src="src/assets/Favorite Icon.svg" className="w-4 h-4" />
                </button>
              </div>
              <div>
                <button className="btn btn-neutral" title="share">
                  <img src="src/assets/Share Icon.svg" className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="avatar flex justify-between">
            <div className="w-10 rounded-full">
              <img src="src/assets/Mockup4.jpg" />
            </div>
            <div className="w-10 rounded-full">
              <img src="src/assets/Mockup4.jpg" />
            </div>
            <div className="w-10 rounded-full">
              <img src="src/assets/Mockup4.jpg" />
            </div>
          </div>
          <div className="divider"></div>
          <div className="pb-10">
            <p className=" font-semibold text-xl">2,000 THB</p>
          </div>
          <div className="pb-10">
            <button className="w-1/2 btn btn-error">Add to cart</button>
            <button className="w-1/2 btn btn-neutral">Make an offer</button>
          </div>
          <div className="divider"></div>
          <div className="pb-10">
            <p className=" font-semibold text-xl">Description</p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
          <p className=" font-semibold text-xl">More information</p>
          <p>
            - Size: 108 W * 72 L * 2 H (Centimeter) - Oil Painting - Including Pre-Plan Document - With the Premium gold
            box
          </p>
        </div>
      </div>
    </>
  )
}

export default Product
