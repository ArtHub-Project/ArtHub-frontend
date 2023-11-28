import { usePosts } from '../hooks/usePosts'
import { ProductDetail } from './ProductDetail'

export const AllProducts = () => {
  // test product filtered
  const { products, isLoading } = usePosts()

  if (isLoading) return <h1>Loading...</h1>

  return (
    <>
      {/* type painting */}
      <div className="text-zinc-950">
        <p className="font-bold text-xl pl-8 pt-10">New in :</p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 justify-items-center p-10 gap-10 text-zinc-950">
          {products &&
            products.map((product) => {
              return <ProductDetail key={product.id} product={product} />
            })}
        </div>
      </div>
    </>
  )
}
