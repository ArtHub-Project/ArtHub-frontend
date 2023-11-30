import { Link } from 'react-router-dom'
import { ProductDTO } from '../types/dto'

interface IProductProps {
  product: ProductDTO
}

export const ProductDetail = ({ product }: IProductProps) => {
  return (
    <div className="card w-64 h-96 bg-slate-50 shadow-sm">
      <figure className="h-2/3">
        <Link className="h-full" to={`/product/${product.id}`}>
          <img className="h-full w-full object-cover" src={product.imageUrl} />
        </Link>
      </figure>
      <div className="card-body h-1/3 p-4">
        <div className="space-x-0">
          <p className="card-title text-base font-bold pb-2">{product.name}</p>
          <p className="text-[#CF1CB6] text-base font-semibold ">{product.price} ฿</p>
        </div>
        <div className="card-actions card-normal justify-end">
          <p className="font-sm text-sm font-semibold">By: {product.User.name}</p>
        </div>
      </div>
    </div>
  )
}
