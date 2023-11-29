import Cart from './Cart'

const Checkout = () => {
  return (
    <div className="container mx-30 pt-6  m-auto flex-col flex">
      {/* Heading */}
      <div className="max-w-max inline-flex gap-7 my-4 item-end justify-start ">
        <img className="mr-2 w-auto" src="/images/ArtHubLogo.svg" alt="" />
        <h2 className="text-2xl font-bold">Chektout</h2>
      </div>
      {/* input */}
      <div className="flex w-full space-x-8 ">
        {/* information left-side */}
        <div className=" w-3/4 h-auto space-y-8">
          {/* Contact Information */}
          <div className="p-6 bg-white rounded-2xl shadow">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">Contact Information</h3>
              <hr className="opacity-20 border border-zinc-400" />
            </div>
            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text text-zinc-950 text-sm font-bold ">Email Address</span>
              </label>
              <input
                type="text"
                placeholder="Example: myaddress@arthub.com"
                className="input input-bordered w-full bg-white focus:border-primary-50"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-zinc-950 text-sm font-bold ">Telephone</span>
              </label>
              <input
                type="text"
                placeholder="Example: 0xxxxxxxxx"
                className="input input-bordered w-full bg-white focus:border-primary-50"
              />
            </div>
          </div>
          {/* Promo / Coupon code */}
          <div className="p-6 bg-white rounded-2xl shadow">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">Promo / Coupon code</h3>
              <hr className="opacity-20 border border-zinc-400" />
            </div>
            <div className="form-control w-full mb-4 flex flex-row space-x-8 items-end">
              <div className="w-3/4">
                <label className="label">
                  <span className="label-text text-zinc-950 text-sm font-bold ">Coupon</span>
                </label>
                <input
                  type="text"
                  placeholder="Type code here"
                  className="input input-bordered w-full bg-white focus:border-primary-50"
                />
              </div>
              <div className="w-1/4">
                <button className=" btn btn-block   text-white bg-primary-50 border-primary-50 hover:bg-primary-80 hover:border-primary-80">
                  Apply
                </button>
              </div>
            </div>
            <h4 className="text-lg font-bold">Description</h4>
            <ul className="text-l list-disc ml-4">
              <li>You can only use one discount/promo code per order. This applies to our free-delivery codes, too.</li>
              <li>Discount/promo codes cannot be used when buying gift vouchers.</li>
            </ul>
          </div>
          {/* Delivery Option */}
          <div className="p-6 bg-white rounded-2xl shadow">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">Delivery Option</h3>
              <hr className="opacity-20 border border-zinc-400" />
            </div>
            <div className=" gap-3 mb-4">
              <label className="cursor-pointer">
                <input type="radio" className="peer sr-only" name="Delivery Option" />
                <div className="w-full rbg-slate-50 rounded-lg border p-5 bg-[#FAF9FE] text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-[#d946ef] peer-checked:ring-[#d946ef] peer-checked:ring-offset-2">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <p className="text-m font-bold uppercase text-zinc-950">Free Shipping</p>
                      <div>
                        <svg width="16" height="16" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="m10.6 13.8l-2.175-2.175q-.275-.275-.675-.275t-.7.3q-.275.275-.275.7q0 .425.275.7L9.9 15.9q.275.275.7.275q.425 0 .7-.275l5.675-5.675q.275-.275.275-.675t-.3-.7q-.275-.275-.7-.275q-.425 0-.7.275ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="text-sm flex items-end justify-between">
                      <p>7 - 14 Business Days based on Weight & Destination [Free Shipping will apply at final step]</p>
                      <p className="text-sm font-bold text-zinc-950">฿ 0</p>
                    </div>
                  </div>
                </div>
              </label>
            </div>
            <div className=" gap-3 mb-4">
              <label className="cursor-pointer">
                <input type="radio" className="peer sr-only" name="Delivery Option" />
                <div className="w-full rbg-slate-50 rounded-lg border p-5 bg-[#FAF9FE] text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-[#d946ef] peer-checked:ring-[#d946ef] peer-checked:ring-offset-2">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <p className="text-m font-bold uppercase text-zinc-950">Express Shipping</p>
                      <div>
                        <svg width="16" height="16" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="m10.6 13.8l-2.175-2.175q-.275-.275-.675-.275t-.7.3q-.275.275-.275.7q0 .425.275.7L9.9 15.9q.275.275.7.275q.425 0 .7-.275l5.675-5.675q.275-.275.275-.675t-.3-.7q-.275-.275-.7-.275q-.425 0-.7.275ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="text-sm flex items-end justify-between">
                      <p>1 - 2 Business Days based on Weight & Destination [Free Shipping will apply at final step] </p>
                      <p className="text-sm font-bold text-zinc-950">฿ 2,000</p>
                    </div>
                  </div>
                </div>
              </label>
            </div>
            <div className=" gap-3">
              <label className="cursor-pointer">
                <input type="radio" className="peer sr-only" name="Delivery Option" />
                <div className="w-full rbg-slate-50 rounded-lg border p-5 bg-[#FAF9FE] text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-[#d946ef] peer-checked:ring-[#d946ef] peer-checked:ring-offset-2">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <p className="text-m font-bold uppercase text-zinc-950">Collect at Arthub</p>
                      <div>
                        <svg width="16" height="16" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="m10.6 13.8l-2.175-2.175q-.275-.275-.675-.275t-.7.3q-.275.275-.275.7q0 .425.275.7L9.9 15.9q.275.275.7.275q.425 0 .7-.275l5.675-5.675q.275-.275.275-.675t-.3-.7q-.275-.275-.7-.275q-.425 0-.7.275ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="text-sm flex items-end justify-between">
                      <p>
                        collect at Arthub community (Please call to 02-111-111 before come){' '}
                        <span className="font-bold"> Google Map</span>
                      </p>
                      <p className="text-sm font-bold text-zinc-950">฿ 0</p>
                    </div>
                  </div>
                </div>
              </label>
            </div>
          </div>
          {/* Shipping Address */}
          <div className="p-6 bg-white rounded-2xl shadow">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">Shipping Address</h3>
              <hr className="opacity-20 border border-zinc-400" />
            </div>
            <div className="form-control w-full mb-4 flex flex-row space-x-8 items-end">
              <div className="w-2/4">
                <label className="label">
                  <span className="label-text text-zinc-950 text-sm font-bold ">
                    First Name <span className="text-[#CF1CB6]">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="First Name "
                  className="input input-bordered w-full bg-white focus:border-primary-50"
                />
              </div>
              <div className="w-2/4">
                <label className="label">
                  <span className="label-text text-zinc-950 text-sm font-bold ">
                    Last Name<span className="text-[#CF1CB6]">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input input-bordered w-full bg-white focus:border-primary-50"
                />
              </div>
            </div>
            <div className="form-control w-full mb-4 flex flex-row space-x-8 items-end">
              <div className="w-full">
                <label className="label">
                  <span className="label-text text-zinc-950 text-sm font-bold ">
                    Address <span className="text-[#CF1CB6]">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Your address "
                  className="input input-bordered w-full bg-white focus:border-primary-50"
                />
              </div>
            </div>
            <div className="form-control w-full mb-4 flex flex-row space-x-8 items-end">
              <div className="w-2/4">
                <label className="label">
                  <span className="label-text text-zinc-950 text-sm font-bold ">
                    Country <span className="text-[#CF1CB6]">*</span>
                  </span>
                </label>
                <button className="inline-flex  justify-between w-full px-4 py-4 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-[#CF1CB6]">
                  <span className="mr-2">Please Select</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 ml-2 -mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div className="w-2/4">
                <label className="label">
                  <span className="label-text text-zinc-950 text-sm font-bold ">
                    City <span className="text-[#CF1CB6]">*</span>
                  </span>
                </label>
                <button className="inline-flex  justify-between w-full px-4 py-4 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-[#CF1CB6]">
                  <span className="mr-2">Please Select</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 ml-2 -mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="form-control w-full mb-4 flex flex-row space-x-8 items-end">
              <div className="w-2/4">
                <label className="label">
                  <span className="label-text text-zinc-950 text-sm font-bold ">
                    State/Province <span className="text-[#CF1CB6]">*</span>
                  </span>
                </label>
                <button className="inline-flex  justify-between w-full px-4 py-4 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-[#CF1CB6]">
                  <span className="mr-2">Please Select</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 ml-2 -mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div className="w-2/4">
                <label className="label">
                  <span className="label-text text-zinc-950 text-sm font-bold ">
                    Zip/Postal Code <span className="text-[#CF1CB6]">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="First Name "
                  className="input input-bordered w-full bg-white focus:border-primary-50"
                />
              </div>
            </div>
            <div className="form-control w-full mb-4 flex flex-row space-x-8 items-end">
              <div className="w-2/4">
                <label className="label">
                  <span className="label-text text-zinc-950 text-sm font-bold ">
                    Phone Number <span className="text-[#CF1CB6]">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="0xxxxxxxxx "
                  className="input input-bordered w-full bg-white focus:border-primary-50"
                />
              </div>
            </div>
            <div className="form-control w-full mb-4 flex flex-row space-x-8 items-end">
              <div className="w-2/4 inline-flex space-x-4 mt-4">
                <input type="checkbox" className="space-x-1 h-5 w-5 input-bordered w-ful bg-white" />
                <p className="font-bold font-sm">My billing and shipping address are the same</p>
              </div>
            </div>
          </div>
          {/* Payment methods */}
          <div className="p-6 bg-white rounded-2xl shadow">
            <div className="mb-4">
              <h3 className="text-2xl font-bold mb-2">Payment methods</h3>
              <hr className="opacity-20 border border-zinc-400" />
            </div>
            <div className="w-1/4 inline-flex space-x-4 mt-4">
              <input type="radio" name="radio-3" className="radio" />
              <p className="font-m">Debit/Credit Card</p>
            </div>

            <div className="w-1/4 inline-flex space-x-4 mt-4">
              <input type="radio" name="radio-3" className="radio" />
              <p className="font-m">Bank Transfer</p>
            </div>
            <div className="w-1/4 inline-flex space-x-4 mt-4">
              <input type="radio" name="radio-3" className="radio" />
              <p className="font-m">Paypal</p>
            </div>
            <div className="w-1/4 inline-flex space-x-4 mt-4">
              <input type="radio" name="radio-3" className="radio" />
              <p className="font-m">Cash (at Arthub)</p>
            </div>
            <div className="form-control w-full mt-8 mb-4 flex flex-row space-x-8 items-end">
              <div className="w-2/4">
                <label className="label">
                  <span className="label-text text-zinc-950 text-sm font-bold ">
                    Card number <span className="text-[#CF1CB6]">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder=" "
                  className="input input-bordered w-full bg-white focus:border-primary-50"
                />
              </div>
              <div className="w-2/4">
                <label className="label">
                  <span className="label-text text-zinc-950 text-sm font-bold ">
                    Name on card <span className="text-[#CF1CB6]">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder=" "
                  className="input input-bordered w-full bg-white focus:border-primary-50"
                />
              </div>
            </div>
            <div className="form-control w-full mt-8 mb-4 flex flex-row space-x-8 items-end">
              <div className="w-2/4">
                <label className="label">
                  <span className="label-text text-zinc-950 text-sm font-bold ">
                    Expiration date (MM/YY) <span className="text-[#CF1CB6]">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="MM/YY "
                  className="input input-bordered w-full bg-white focus:border-primary-50"
                />
              </div>
              <div className="w-2/4">
                <label className="label">
                  <span className="label-text text-zinc-950 text-sm font-bold ">
                    CVV <span className="text-[#CF1CB6]">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="XXX "
                  className="input input-bordered w-full bg-white focus:border-primary-50"
                />
              </div>
            </div>
            <div className="flex gap-8 pt-4">
              <h3 className="font-bold">We accept</h3>
              <img src="/images/CardSet.svg" alt="" />
            </div>
          </div>
          <button className=" btn btn-block mb-4  bg-[#CF1CB6] text-white bg-primary-50 border-primary-50 hover:bg-primary-80 hover:border-primary-80">
            Buy now
          </button>
          <div>
            <p>
              Don't forget, returns of eligible items sent to us within 14 days of receipt are FREE. If you send
              something back after that, you'll have to pay our returns fee. Exclusions apply.
            </p>
            <br />
            <p>
              By placing your order you agree to our Terms & Conditions, privacy and returns policies . You also consent
              to some of your data being stored by ASOS, which may be used to make future shopping experiences better
              for you.
            </p>
          </div>
        </div>
        {/* checkout right-side */}
        <div className="w-1/4 fixed top-22 right-20">
          <Cart />
        </div>
      </div>
    </div>
  )
}

export default Checkout
