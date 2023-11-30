import { useNavigate, useParams } from 'react-router-dom'
import usePost from '../hooks/usePost'
import useCart from '../hooks/useCart'
import { FormEvent } from 'react'
import toast from 'react-hot-toast'

const Product = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { Post, isLoading } = usePost(id || '1')
  const { cart, useCartItem } = useCart()

  if (isLoading) return <h1>Loading...</h1>

  const Click = (e: FormEvent) => {
    e.preventDefault()
    try {
      console.log(cart?.CartItem.filter((word) => word.productId === Number(id)).length)
      if (cart?.CartItem.filter((word) => word.productId === Number(id)).length !== 0)
        return toast.error('Every art has only 1 stock! ')
      useCartItem(Number(id))
      navigate('/')
      location.reload()
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <>
      <div className="font-medium px-6 py-4 text-sm breadcrumbs">
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
      <div className="w-full flex p-6 space-x-10">
        <>
          {Post && (
            <>
              <div className="w-1/2">
                <div className="h-full">
                  <img className=" h-full object-cover rounded-2xl" src={Post.imageUrl} />
                </div>
              </div>

              <div className="w-1/2 px-5">
                <div className="pb-10">
                  <div className="">
                    <p className=" font-semibold text-2xl">{Post?.name}</p>
                  </div>
                  {/* <div className="flex flex-col justify-between"> */}
                  <div className="flex pt-6">
                    <div className="pr-4">
                      <button className="btn btn-neutral" title="favorite">
                        <img src="/images/Favorite Icon.svg" className="w-4 h-4" />
                      </button>
                    </div>
                    <div>
                      <button className="btn btn-neutral" title="share">
                        <img src="/images/Share Icon.svg" className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="avatar flex justify-between">
                  <div className="w-10 rounded-full">
                    <img src="/images/Mockup4.jpg" />
                  </div>
                  <div className="w-10 rounded-full">
                    <img src="/images/Mockup4.jpg" />
                  </div>
                  <div className="w-10 rounded-full">
                    <img src="/images/Mockup4.jpg" />
                  </div>
                </div>
                <div className="divider"></div>
                <div className="pb-10">
                  <p className=" font-semibold text-xl">{Post?.price}</p>
                </div>
                <div className="pb-10">
                  <button className="w-1/2 btn btn-error" onClick={Click}>
                    Add to cart
                  </button>
                  <button className="w-1/2 btn btn-neutral">Make an offer</button>
                </div>
                <div className="divider"></div>
                <div className="pb-10">
                  <p className=" font-semibold text-xl">Description</p>
                  <p>{Post?.description}</p>
                </div>
                <p className=" font-semibold text-xl">More information</p>
                <p>
                  - Size: 108 W * 72 L * 2 H (Centimeter) - Oil Painting - Including Pre-Plan Document - With the
                  Premium gold box
                </p>
              </div>
            </>
          )}
        </>
      </div>
    </>
  )
}

export default Product
