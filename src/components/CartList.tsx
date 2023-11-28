const CartList = () => {
  return (
    <div className="justify-between w-full m-auto items-start inline-flex">
      <div>
        <img className="rounded-lg" src="/images/CartImage1.jpg" alt="" />
      </div>
      <div>
        <h2 className="w-[229px] text-zinc-950 text-base font-[16px] mb-2">
          Batman New 52 standing on the falling Gothem
        </h2>
        <p className="text-zinc-600 text-base font-normal">Painting</p>
      </div>
      <div>
        <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:text-primary-80"> - </span>
        <input
          className="h-8 w-10 border-none bg-white text-center text-xs outline-none font-bold"
          type="text"
          value="1"
        />
        <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:text-primary-80 mb-4">
          {' '}
          +{' '}
        </span>
        <p className="mt-2 text-center text-primary-50 hover:text-primary-80">Remove</p>
      </div>
      <div>
        <p className="text-zinc-950 text-base font-bold">฿ 1999,999,000</p>
      </div>
      <div></div>
    </div>
  )
}

export default CartList
