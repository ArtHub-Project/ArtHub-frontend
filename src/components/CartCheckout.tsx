import useCart from '../hooks/useCart'
import CardListCheckout from './CartListCheckout'

const CartCheckout = () => {
  const { cart, isLoading, useCartItemDelete } = useCart()

  if (isLoading) return <h1>Loading...</h1>

  return (
    <div className="flex justify-center">
      <div className="w-full pt-4 pb-10 ">
        <div className="place-items-center ">
          <div className="flex items-center gap-7 my-4 item-end"></div>
          <div className="p-6 bg-white rounded-2xl shadow w-full h-auto ">
            <div>
              <p className="text-[24px] text-black font-bold mb-2">Your Cart</p>
              <hr className="opacity-20 border border-zinc-400" />
            </div>
            <div className="w-full mt-4 mb-2 inline-flex justify-between m-auto">
              <h6 className="font-bold font text-[14px] text-zinc-950">{cart?.CartItem.length} items</h6>
              <p className="font-bold font text-[14px] text-zinc-950">Clear all</p>
            </div>
            <div>
              {cart &&
                cart.CartItem.map((cart) => {
                  return <CardListCheckout key={cart.id} cartItem={cart} useCartItemDelete={useCartItemDelete} />
                })}
            </div>

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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartCheckout
