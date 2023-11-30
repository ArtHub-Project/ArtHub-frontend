import { Link } from 'react-router-dom'
import { ProductDTO } from '../types/dto'

interface IProductProps {
  product: ProductDTO
}

export const ProductDetail = ({ product }: IProductProps) => {
  return (
    <div className="card w-64 bg-slate-50 shadow-sm">
      <figure className="h-2/3">
        <Link className="h-full" to={`/product/${product.id}`}>
          <img className="h-full w-full object-cover" src={product.imageUrl} />
        </Link>
      </figure>

      <div className="card-body h-1/3 p-4">
        <div className="space-x-0">
          <p className="card-title text-2xl font-bold">{product.name}</p>
          <p className="text-[#CF1CB6] hover:text-[#A3068D] text-lg">{product.price} ฿</p>
        </div>

        <div className="card-actions card-normal justify-end">
          <p className="font-sm">By: {product.User.name}</p>

          {/* <div className="flex gap-x-2">
            <div className="badge text-white bg-slate-600 border-slate-600">{product.collection}</div>
            <div className="badge text-white bg-[#CF1CB6] border-[#CF1CB6]">{product.type}</div>
          </div> */}
        </div>
      </div>
    </div>
  )
}
