const Menu = () => {
  return (
    <div className="flex justify-between font-bold text-zinc-600 p-4 ">
      <div className="menu lg:menu-horizontal text-xs rounded-box space-x-2">
        <li>
          <a className="bg-slate-50">
            <img src="src/assets/New In.svg" />
            New in
          </a>
        </li>
        <li>
          <a className="bg-slate-50">
            <img src="src/assets/Painting.svg" />
            Painting
          </a>
        </li>
        <li>
          <a className="bg-slate-50">
            <img src="src/assets/Drawing.svg" />
            Drawing
          </a>
        </li>
        <li>
          <a className="bg-slate-50">
            <img src="src/assets/Photography.svg" />
            Photography
          </a>
        </li>
        <li>
          <a className="bg-slate-50">
            <img src="src/assets/Sculpture.svg" />
            Sculpture
          </a>
        </li>
        <li>
          <a className="bg-slate-50">
            <img src="src/assets/Digital Art.svg" />
            Digital Art
          </a>
        </li>
        <li>
          <a className="bg-slate-50">
            <img src="src/assets/Other Media.svg" />
            Other
          </a>
        </li>
      </div>
      <div className="menu lg:menu-horizontal text-xs rounded-box space-x-2">
        <li>
          <a className="bg-slate-50">
            <img src="src/assets/Buy:Bid.svg" />
            Buy/Bid
          </a>
        </li>
        <li>
          <a className="bg-slate-50">
            <img src="src/assets/Auction.svg" />
            Auction
          </a>
        </li>
      </div>
    </div>
  )
}

export default Menu
