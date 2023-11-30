import { Link } from 'react-router-dom'
import CartList from '../components/CartList'
import useCart from '../hooks/useCart'

const Cart = () => {
  const { cart, isLoading, useCartItemDelete } = useCart()

  if (isLoading) return <h1>Loading...</h1>

  return (
    <div>
      <div className="w-full inline-flex items-center justify-center">
        <div className="place-items-center ">
          <div className="flex items-center gap-7 my-4 item-end">
            <div>
              <Link to="/" className="w-1/2">
                <img src="/images/ArtHubLogo.svg" />
              </Link>
            </div>
            <div className="w-5/6">
              <p className="text-[32px] font-bold">Cart</p>
            </div>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow w-full h-auto ">
            <div>
              <p className="text-[24px] font-bold mb-2">Your Cart</p>
              <hr className="opacity-20 border border-zinc-400" />
            </div>
            <div className="w-full mt-4 mb-2 inline-flex justify-between m-auto">
              <h6 className="font-bold font text-[14px] text-zinc-950">{cart?.CartItem.length} items</h6>
              <p className="font-bold font text-[14px] text-zinc-950">Clear all</p>
            </div>
            <div>
              {cart &&
                cart.CartItem.map((cart) => {
                  return <CartList key={cart.id} cartItem={cart} useCartItemDelete={useCartItemDelete} />
                })}
            </div>
            {/* Subtotal */}
            <div className=" mt-8 p-4 m-auto w-full bg-slate-50 rounded-lg border ">
              <h6 className="text-sm font-bold font mb-2">Order summary</h6>
              <div className="flex justify-between">
                <p className="text-gray-700">Subtotal</p>
                <p className="text-zinc-950 font-bold ">฿ {cart?.total}</p>
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
                <p className="text-zinc-950 font-bold">฿ {cart?.total}</p>
              </div>
              <Link to="/checkout">
                <button className=" mt-4 btn btn-block  text-white bg-primary-50 border-primary-50 hover:bg-primary-80 hover:border-primary-80">
                  <p>Checkout</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
