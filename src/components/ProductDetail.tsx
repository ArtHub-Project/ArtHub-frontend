import { Link } from 'react-router-dom'
import { ProductDTO } from '../types/dto'

interface IProductProps {
  product: ProductDTO
}

export const ProductDetail = ({ product }: IProductProps) => {
  return (
    <div className="card w-64 h-96 bg-slate-50 shadow-sm">
      <Link to={`/product/${product.id}`}>
        <figure>
          <img src={product.imageUrl} />
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
      </Link>
    </div>
  )
}
