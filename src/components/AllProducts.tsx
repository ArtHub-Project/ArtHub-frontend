import { usePosts } from '../hooks/usePosts'
import { ProductDetail } from './ProductDetail'

export const AllProducts = () => {
  const { products, isLoading } = usePosts()

  if (isLoading) return <h1>Loading...</h1>

  return (
    <div>
      <div className="text-zinc-950">
        <p className="font-bold text-xl pl-8 pt-10">All Product :</p>
        {products &&
          products.map((product) => {
            return <ProductDetail key={product.id} product={product} />
          })}
      </div>
    </div>
  )
}
