import { Link } from 'react-router-dom'
import { ProductDTO } from '../types/dto'

interface IProductProps {
  product: ProductDTO
}

export const ProductDetail = ({ product }: IProductProps) => {
  return (
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
          <div className="badge text-white bg-slate-600 border-slate-600">{product.collection}</div>
          <div className="badge text-white bg-[#CF1CB6] border-[#CF1CB6]">{product.type}</div>
        </div>
      </div>
    </div>
  )
}
