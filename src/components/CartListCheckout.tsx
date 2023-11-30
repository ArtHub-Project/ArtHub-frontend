import usePost from '../hooks/usePost'
import { CartItemDTO } from '../types/dto'

interface ICartProps {
  cartItem: CartItemDTO
  useCartItemDelete: (id: string) => Promise<void>
}

const CardListCheckout = (cart: ICartProps) => {
  const { Post } = usePost(cart.cartItem.productId.toString())

  return (
    <div className="grid grid-cols-3 gap-6 p-2">
      <div className="h-[56px] w-[56px]">
        <img className="w-full h-full rounded-md object-cover" src={Post?.imageUrl} alt="" />
      </div>
      <div className="w-full">
        <h2 className="text-zinc-950 text-left text-sm font-bold mb-2">{Post?.name}</h2>
        <p className="text-zinc-600 text-left text-sm ">{Post?.type}</p>
      </div>
      <div>
        <p className="text-zinc-950 text-right text-base font-bold">฿ {Post?.price}</p>
      </div>
    </div>
  )
}

export default CardListCheckout
