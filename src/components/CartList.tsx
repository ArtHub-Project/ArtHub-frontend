import usePost from '../hooks/usePost'
import { CartItemDTO } from '../types/dto'

interface ICartProps {
  cartItem: CartItemDTO
}

const CartList = (cart: ICartProps) => {
  const { Post } = usePost(cart.cartItem.productId.toString())

  return (
    <div className="grid grid-cols-4 gap-12 p-5">
      <div className="h-[100px] w-[100px]">
        <img className="w-full h-full rounded-md object-cover" src={Post?.imageUrl} alt="" />
      </div>
      <div>
        <h2 className="text-zinc-950 text-left text-base font-bold mb-2">{Post?.name}</h2>
        <p className="text-zinc-600 text-left text-sm ">{Post?.type}</p>
      </div>
      <div className="">
        <div>
          <select className="select select-bordered w-full text-center bg-white focus:border-primary-50">
            <option>1</option>
          </select>
        </div>
        <div>
          <p className="mt-2 text-center text-primary-50 hover:text-primary-80">Remove</p>
        </div>
      </div>
      <div>
        <p className="text-zinc-950 text-right text-base font-bold">฿ {Post?.price}</p>
      </div>
    </div>
  )
}

export default CartList
