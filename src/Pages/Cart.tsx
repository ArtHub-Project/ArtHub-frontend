// import React from 'react'
import CartList from '../Components/cartList'
import arthubLogo from '/public/images/arthubLogo.svg'

const Cart = () => {
  return (
    <div className="w-full h-screen inline-flex items-center m-auto justify-center">
      <div className="place-items-center ">
        <div className="w-[736px] inline-flex gap-7 my-4 item-end">
          <img className="mr-2 w-[166.80px]" src={arthubLogo} alt="" />
          <h2 className="text-[32px] font-bold">Cart</h2>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow w-[736px] h-auto ">
          <div>
            <h3 className="text-[24px] font-bold mb-2">Your Cart</h3>
            <hr className="opacity-20 border border-zinc-400" />
          </div>
          <div className="w-full mt-4 mb-2 inline-flex justify-between m-auto">
            <h6 className="font-bold font text-[14px] text-zinc-950">1 items</h6>
            <p className="font-bold font text-[14px] text-zinc-950">Clear all</p>
          </div>
          <div>
            <div></div>
            <CartList />
            <hr className="my-4 opacity-20 border border-zinc-400" />
            <CartList />
          </div>
          {/* Subtotal */}
          <div className=" mt-8 p-4 m-auto w-[328px] bg-slate-50 rounded-lg border ">
            <h6 className="text-sm font-bold font mb-2">Order summary</h6>
            <div className="flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-zinc-950 font-bold ">฿ 1200</p>
            </div>
            <hr className="my-4 opacity-20 border border-zinc-400" />
            <div className="flex justify-between">
              <p className="text-gray-700">Shipping estimate</p>
              <p className="text-zinc-950 font-bold">฿ 0</p>
            </div>
            <hr className="my-4 opacity-20 border border-zinc-400" />
            <div className="flex justify-between">
              <p className="text-gray-700">Tax estimate</p>
              <p className="text-zinc-950 font-bold">฿ 0</p>
            </div>
            <hr className="my-4 opacity-20 border border-zinc-400" />
            <div className="flex justify-between">
              <p className="text-gray-700">Order total</p>
              <p className="text-zinc-950 font-bold">฿ 500,000,000</p>
            </div>
            <button className=" mt-4 btn btn-block  text-white bg-primary-50 border-primary-50 hover:bg-primary-80 hover:border-primary-80">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
