const Menu = () => {
  return (
    <div className="flex justify-between font-bold text-zinc-600 p-4 ">
      <div className="menu lg:menu-horizontal text-xs rounded-box space-x-2">
        <li>
          <a className="bg-slate-50">
            <img src="/images/NewIn.svg" />
            New in
          </a>
        </li>
        <li>
          <a className="bg-slate-50">
            <img src="/images/Painting.svg" />
            Painting
          </a>
        </li>
        <li>
          <a className="bg-slate-50">
            <img src="/images/Drawing.svg" />
            Drawing
          </a>
        </li>
        <li>
          <a className="bg-slate-50">
            <img src="/images/Photography.svg" />
            Photography
          </a>
        </li>
        <li>
          <a className="bg-slate-50">
            <img src="/images/Sculpture.svg" />
            Sculpture
          </a>
        </li>
        <li>
          <a className="bg-slate-50">
            <img src="/images/DigitalArt.svg" />
            Digital Art
          </a>
        </li>
        <li>
          <a className="bg-slate-50">
            <img src="/images/OtherMedia.svg" />
            Other
          </a>
        </li>
      </div>
      <div className="menu lg:menu-horizontal text-xs rounded-box space-x-2">
        <li>
          <a className="bg-slate-50">
            <img src="/images/BuyBid.svg" />
            Buy/Bid
          </a>
        </li>
        <li>
          <a className="bg-slate-50">
            <img src="/images/Auction.svg" />
            Auction
          </a>
        </li>
      </div>
    </div>
  )
}

export default Menu
