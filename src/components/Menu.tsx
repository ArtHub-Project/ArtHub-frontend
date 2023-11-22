const Menu = () => {
  return (
    <>
      <div className="flex justify-between font-bold text-xl p-4">
        <div className="menu lg:menu-horizontal text-base rounded-box">
          <li>
            <a>New in</a>
          </li>
          <li>
            <a>Painting</a>
          </li>
          <li>
            <a>Drawing</a>
          </li>
          <li>
            <a>Photography</a>
          </li>
          <li>
            <a>Sculpture</a>
          </li>
          <li>
            <a>Digital Art</a>
          </li>
          <li>
            <a>Other</a>
          </li>
        </div>
        <div className="menu lg:menu-horizontal text-base rounded-box">
          <li>
            <a>Buy/Bid</a>
          </li>
          <li>
            <a>Auction</a>
          </li>
        </div>
      </div>
    </>
  )
}

export default Menu
