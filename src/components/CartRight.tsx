import cartImage1 from '../assets/cartImage1.jpg'

const CartRight = () => {
  return (
    <>
      <div className="p-6 bg-white rounded-t-2xl shadow space-y-4 ">
        <div className="inline-flex items-center justify-between m-auto w-full">
          <h3 className="text-[24px] font-bold mb-2">Your Cart</h3>
          <p className="text-sm">Edit</p>
        </div>
        <div className="justify-between w-full m-auto items-start inline-flex">
          <div>
            <img className="rounded-lg" src={cartImage1} alt="" />
          </div>
          <div>
            <h2 className="w-[229px] text-zinc-950 text-base font-[16px] mb-2">
              Batman New 52 standing on the falling Gothem
            </h2>
            <p className="text-zinc-950 text-base font-bold">฿ 1999,999,000</p>
          </div>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-700">Subtotal</p>
          <p className="text-zinc-950 font-bold ">฿ 1200</p>
        </div>
        <hr className="my-4 opacity-20 border border-zinc-400" />
        <div className="flex justify-between">
          <p className="text-gray-700">Shipping estimate</p>
          <p className="text-zinc-950 font-bold ">Free</p>
        </div>
        <hr className="my-4 opacity-20 border border-zinc-400" />
        <div className="flex justify-between">
          <p className="text-gray-700 font-bold">Order total</p>
          <p className="text-zinc-950 font-bold ">฿ 500,000,000</p>
        </div>
      </div>
      {/* bottom */}
      <div className="bg-[#FFEBFC] rounded-b-2xl shadow items-center py-4 px-4 space-y-2">
        <h3 className="font-bold text-center ">NEED IT FAST? GET IT IN 2 DAYS</h3>
        <button className=" btn btn-block  bg-white text-[#CF1CB6] bg-primary-50 border-primary-50 hover:bg-primary-80 hover:border-primary-80">
          Learn more
        </button>
      </div>
    </>
  )
}

export default CartRight
