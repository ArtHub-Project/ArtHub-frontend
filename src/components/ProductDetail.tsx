import { Link } from 'react-router-dom'
import { ProductDTO } from '../types/dto'

interface IProductProps {
  product: ProductDTO
}

export const ProductDetail = ({ product }: IProductProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 justify-items-center p-10 gap-10 text-zinc-950">
      <div className="card w-64 h-96 bg-slate-50 shadow-sm">
        <figure>
          <Link to={`/product/${product.id}`}>
            <img src={product.imageUrl} />
          </Link>
        </figure>
        <div className="card-body">
          <p className="card-title">{product.name} </p>
          <p>{product.description}</p>
          <p>{product.price} THB</p>
          <div className="card-actions card-normal justify-end">
            <div className="badge badge-error">{product.collection}</div>
            <div className="badge badge-outline">{product.type}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
