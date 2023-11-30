import { NavLink, useNavigate, useParams } from 'react-router-dom'
import usePost from '../hooks/usePost'
import toast from 'react-hot-toast'
import { useAuth } from '../providers/AuthProvider'
import useCart from '../hooks/useCart'
import { FormEvent } from 'react'

const Product = () => {
  const navigate = useNavigate()
  const { username } = useAuth()
  const { id } = useParams()
  const { Post, isLoading, deleteProduct } = usePost(id || '1')
  const { useCartItem } = useCart()

  const handleDelete = async () => {
    try {
      await deleteProduct()
      toast.success('Product has been deleted!')
      navigate('/')
    } catch (err) {
      if (err instanceof Error) toast.error(err.message)
    }
  }

  if (isLoading) return <h1>Loading...</h1>

  const handleAddItem = (e: FormEvent) => {
    e.preventDefault()
    try {
      useCartItem(Number(id))
      navigate('/')
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
                    <p className=" font-semibold text-2xl text-zinc-950">{Post?.name}</p>
                  </div>
                  <div className="flex pt-6">
                    <div className="pr-4">
                      <button
                        className="btn bg-slate-100 border-slate-100 hover:bg-slate-200 hover:border-slate-200"
                        title="favorite"
                      >
                        <img src="/images/HeartIcon.svg" className="w-4 h-4" />
                      </button>
                    </div>
                    <div>
                      <button
                        className="btn bg-slate-100 border-slate-100 hover:bg-slate-200 hover:border-slate-200"
                        title="share"
                      >
                        <img src="/images/ShareIcon.svg" className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <div className="">
                    <p className="text-zinc-600">Owner:</p>
                    <p className="text-zinc-950">{Post?.User.name}</p>
                  </div>
                  <div className="">
                    <p className="text-zinc-600">Type:</p>
                    <p className="text-zinc-950">{Post?.type}</p>
                  </div>
                  <div className="">
                    <p className="text-zinc-600">Collection:</p>
                    <p className="text-zinc-950">{Post?.collection}</p>
                  </div>
                </div>
                <div className="divider"></div>
                <div className="pb-10 text-center">
                  <p className="font-semibold text-2xl text-zinc-950">{Post?.price} ฿</p>
                </div>
                <div className="pb-10">
                  <div className="">
                    <div className="flex justify-center gap-10">
                      <button
                        onClick={handleAddItem}
                        className="w-1/4 btn text-white bg-[#CF1CB6] border-[#CF1CB6] hover:bg-[#A3068D] hover:border-[#A3068D]"
                      >
                        Add to cart
                      </button>
                      <button className="w-1/4 btn text-zinc-600 bg-slate-100 border-slate-100 hover:bg-slate-200 hover:border-slate-200">
                        Make an offer
                      </button>
                    </div>
                  </div>
                  {username === Post.User.username && (
                    <div>
                      <div className="flex justify-center gap-10">
                        <button
                          onClick={handleDelete}
                          className="w-1/4 btn text-zinc-600 bg-slate-100 border-slate-100 hover:bg-slate-200 hover:border-slate-200"
                        >
                          Delete
                        </button>
                        <div className="w-1/4 btn text-zinc-600 bg-slate-100 border-slate-100 hover:bg-slate-200 hover:border-slate-200">
                          <NavLink to={`/edit/${id}`}>
                            <button>Edit</button>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="divider"></div>
                <div className="pb-10">
                  <p className=" font-semibold text-xl text-zinc-950">Description</p>
                  <p className="text-zinc-600">{Post?.description}</p>
                </div>
                <div className="flex space-x-10 text-center text-xs pt-8">
                  <div className="rounded-lg border w-full p-2">
                    <div className="flex justify-center pt-2">
                      <img src="/images/ShieldIcon.svg" />
                    </div>
                    <div className="pt-2 pb-2">
                      <p className="text-sm text-zinc-950 font-bold pb-2">100%</p>
                      <p className="text-zinc-600">Secure Transaction</p>
                    </div>
                  </div>
                  <div className="rounded-lg border w-full p-2">
                    <div className="flex justify-center pt-2">
                      <img src="/images/LocationIcon.svg" />
                    </div>
                    <div className="pt-2 pb-2">
                      <p className="text-sm text-zinc-950 font-bold pb-2">Worldwide Delivery</p>
                      <p className="text-zinc-600">Receive within 7 days</p>
                    </div>
                  </div>
                  <div className="rounded-lg border w-full p-2">
                    <div className="flex justify-center pt-2">
                      <img src="/images/CartIcon.svg" />
                    </div>
                    <div className="pt-2 pb-2">
                      <p className="text-sm text-zinc-950 font-bold pb-2">Free Shipping</p>
                      <p className="text-zinc-600">For Order with 200,000 THB</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      </div>
    </>
  )
}

export default Product
