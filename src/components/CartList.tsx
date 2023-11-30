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
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="card flex justify-between h-1/4 w-1/4">
      <div className="flex">
        <div>
          <figure>
            <img className="rounded-lg" src={Post?.imageUrl} alt="" />
          </figure>
        </div>
        <div className="card-body">
          <div>
            <h2 className="w-[229px] text-zinc-950 text-base font-[16px] mb-2">{Post?.name}</h2>
            <p className="text-zinc-600 text-base font-normal">{Post?.type}</p>
          </div>
          <div>
            <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:text-primary-80">
              {' '}
              -{' '}
            </span>
            <input
              className="h-8 w-10 border-none bg-white text-center text-xs outline-none font-bold"
              type="text"
              value="1"
            />
            <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:text-primary-80 mb-4">
              {' '}
              +{' '}
            </span>
            <a className="mt-2 text-center text-primary-50 hover:shadow-black text-red-500" onClick={handleRemove}>
              Remove
            </a>
          </div>
          <div>
            <p className="text-zinc-950 text-base font-bold">{Post?.price}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartList
