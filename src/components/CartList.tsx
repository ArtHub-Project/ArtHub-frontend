import usePost from '../hooks/usePost'
import { CartItemDTO } from '../types/dto'

interface ICartProps {
  cartItem: CartItemDTO
}

const CartList = (cart: ICartProps) => {
  const { Post } = usePost(cart.cartItem.productId.toString())

  return (
    <div className="justify-between w-full m-auto items-start inline-flex">
      <div>
        <img className="rounded-lg" src={Post?.imageUrl} alt="" />
      </div>
      <div>
        <h2 className="w-[229px] text-zinc-950 text-base font-[16px] mb-2">{Post?.name}</h2>
        <p className="text-zinc-600 text-base font-normal">{Post?.type}</p>
      </div>
      <div>
        <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:text-primary-80"> - </span>
        <input
          className="h-8 w-10 border-none bg-white text-center text-xs outline-none font-bold"
          type="text"
          value="1"
        />
        <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:text-primary-80 mb-4">
          {' '}
          +{' '}
        </span>
        <p className="mt-2 text-center text-primary-50 hover:text-primary-80">Remove</p>
      </div>
      <div>
        <p className="text-zinc-950 text-base font-bold">{Post?.price}</p>
      </div>
      <div></div>
    </div>
  )
}

export default CartList
