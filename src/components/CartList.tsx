import usePost from '../hooks/usePost'
import { CartItemDTO } from '../types/dto'
import { FormEvent } from 'react'

interface ICartProps {
  cartItem: CartItemDTO
  useCartItemDelete: (id: string) => Promise<void>
}

const CartList = (cart: ICartProps) => {
  const { Post } = usePost(cart.cartItem.productId.toString())

  const handleRemove = async (e: FormEvent) => {
    e.preventDefault()
    try {
      await cart.useCartItemDelete(cart.cartItem.id.toString())
      location.reload()
    } catch (err) {
      console.error(err)
    }
  }

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
          <p
            className="mt-2 text-center text-primary-50 hover:shadow-black cursor-pointer text-[#CF1CB6]"
            onClick={handleRemove}
          >
            Remove
          </p>
        </div>
      </div>
      <div>
        <p className="text-zinc-950 text-right text-base font-bold">฿ {Post?.price}</p>
      </div>
    </div>
  )
}

export default CartList
