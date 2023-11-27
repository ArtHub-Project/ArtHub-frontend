import { usePosts } from '../hooks/usePosts'

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
              return (
                <div key={product.id}>
                  <div className="card w-64 h-96 bg-slate-50 shadow-sm">
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
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </>
  )
}
