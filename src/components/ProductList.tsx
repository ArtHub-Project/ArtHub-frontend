import Products from '../products'

const ProductList = () => {
  // test product filtered
  const ProductPainting = Products.filter((product) => {
    return product.type === 'painting'
  })
  const ProductDrawing = Products.filter((product) => {
    return product.type === 'drawing'
  })
  const ProductPhotography = Products.filter((product) => {
    return product.type === 'photography'
  })
  const ProductSculpture = Products.filter((product) => {
    return product.type === 'sculpture'
  })
  const ProductDigitalArt = Products.filter((product) => {
    return product.type === 'digital art'
  })
  const ProductOther = Products.filter((product) => {
    return product.type === 'other'
  })

  return (
    <>
      {/* type painting */}
      <div className="text-zinc-950">
        <p className="font-bold text-xl pl-8 pt-10">Painting :</p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 justify-items-center p-10 gap-10 text-zinc-950">
          {ProductPainting.map((product) => {
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
      {/* type drawing */}
      <div className="text-zinc-950">
        <p className="font-bold text-xl pl-8 pt-10">Drawing :</p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 justify-items-center p-10 gap-10 text-zinc-950">
          {ProductDrawing.map((product) => {
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
                      <div className="badge badge-outline">{product.collection}</div>
                      <div className="badge badge-outline">{product.type}</div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      {/* type photography */}
      <div className="text-zinc-950">
        <p className="font-bold text-xl pl-8 pt-10">Photography :</p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 justify-items-center p-10 gap-10 text-zinc-950">
          {ProductPhotography.map((product) => {
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
                      <div className="badge badge-outline">{product.collection}</div>
                      <div className="badge badge-outline">{product.type}</div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      {/* type sculpture */}
      <div className="text-zinc-950">
        <p className="font-bold text-xl pl-8 pt-10">Sculpture :</p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 justify-items-center p-10 gap-10 text-zinc-950">
          {ProductSculpture.map((product) => {
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
                      <div className="badge badge-outline">{product.collection}</div>
                      <div className="badge badge-outline">{product.type}</div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      {/* type digital art */}
      <div className="text-zinc-950">
        <p className="font-bold text-xl pl-8 pt-10">Digital Art :</p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 justify-items-center p-10 gap-10 text-zinc-950">
          {ProductDigitalArt.map((product) => {
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
                      <div className="badge badge-outline">{product.collection}</div>
                      <div className="badge badge-outline">{product.type}</div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      {/* type other */}
      <div className="text-zinc-950">
        <p className="font-bold text-xl pl-8 pt-10">Other :</p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 justify-items-center p-10 gap-10 text-zinc-950">
          {ProductOther.map((product) => {
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
                      <div className="badge badge-outline">{product.collection}</div>
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

export default ProductList
