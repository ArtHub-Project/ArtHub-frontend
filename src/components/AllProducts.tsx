import { usePosts } from '../hooks/usePosts'
import { ProductDetail } from './ProductDetail'

export const AllProducts = () => {
  const { products, isLoading } = usePosts()

  if (isLoading) return <h1>Loading...</h1>

  return (
    <div className="text-zinc-950">
      <p className="font-bold text-xl pl-10 pt-10">All Product :</p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 justify-items-center py-6 px-8 gap-10 text-zinc-950">
        {products &&
          products.map((product) => {
            return <ProductDetail key={product.id} product={product} />
          })}
      </div>
    </div>
  )
}
