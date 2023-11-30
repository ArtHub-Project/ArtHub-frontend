import { useNavigate, useParams } from 'react-router-dom'
import usePost from '../hooks/usePost'

import { FormEvent, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import Loading from '../components/Loading'

const Edit = () => {
  const { id } = useParams()
  const { Post, isLoading, editProduct } = usePost(id || '1')
  const navigate = useNavigate()
  const [name, setName] = useState<string>()
  const [description, setDescription] = useState<string>('')
  const [price, setPrice] = useState<number>(0)
  const [type, setType] = useState<string>('')
  const [collection, setCollection] = useState<string>('')
  const [imageUrl, setImageUrl] = useState<string>('')

  useEffect(() => {
    if (Post) {
      setName(Post.name)
      setDescription(Post.description)
      setPrice(Post.price)
      setType(Post.type)
      setCollection(Post.collection)
      setImageUrl(Post.imageUrl)
    }
  }, [Post])

  const handleEdit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      await editProduct({
        name,
        description,
        price,
        type,
        collection,
        imageUrl,
      })

      toast('Edit Successful! 🫡', {
        style: {
          borderRadius: '20px',
          background: '#CF1CB6',
          color: 'white',
        },
      })
      navigate(`/product/${id}`)
    } catch (err) {
      if (err instanceof Error) toast.error(err.message)
    }
  }

  if (isLoading || !Post) return <Loading />

  return (
    <div>
      <form className="w-full inline-flex items-center m-auto justify-center" onSubmit={handleEdit}>
        <div className="place-items-center ">
          <div className="w-[736px] inline-flex gap-7 my-4 item-end">
            <img className="mr-2 w-[166.80px]" src="/images/ArtHubLogo.svg" alt="" />
            <h2 className="text-[32px] font-bold">Create Art to Sell</h2>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow w-[736px] h-auto ">
            <div>
              <h3 className="text-[24px] font-bold mb-2">Art Detail</h3>
              <hr className="opacity-20 border border-zinc-400" />
            </div>
            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text text-zinc-950 text-sm font-bold ">
                  Art Name <span className="text-[#CF1CB6]">*</span>
                </span>
              </label>
              <input
                type="text"
                placeholder=""
                className="input input-bordered w-full bg-white focus:border-primary-50"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-control w-full mb-4 flex flex-row space-x-8 items-end">
              <div className="w-2/4">
                <label className="label">
                  <span className="label-text text-zinc-950 text-sm font-bold ">
                    Category <span className="text-[#CF1CB6]">*</span>
                  </span>
                </label>

                <select
                  defaultValue={type}
                  className="select select-bordered w-full bg-white focus:border-primary-50"
                  onChange={(e) => setType(e.target.value)}
                  required
                >
                  <option value={type} disabled selected>
                    Types
                  </option>
                  <option value={'Painting'}>Painting</option>
                  <option value={'Drawing'}>Drawing</option>
                  <option value={'Photography'}>Photography</option>
                  <option value={'Sculpture'}>Sculpture</option>
                  <option value={'DigitalArt'}>Digital Art</option>
                  <option value={'Other'}>Other</option>
                </select>
              </div>
              <div className="w-2/4">
                <label className="label">
                  <span className="label-text text-zinc-950 text-sm font-bold ">
                    Collection<span className="text-[#CF1CB6]">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Option"
                  className="input input-bordered w-full bg-white focus:border-primary-50"
                  onChange={(e) => setCollection(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="form-control w-full mb-4 flex flex-row space-x-8 items-end">
              <div className="w-2/4">
                <label className="label">
                  <span className="label-text text-zinc-950 text-sm font-bold ">
                    Sell Type <span className="text-[#CF1CB6]">*</span>
                  </span>
                </label>
                <button className="inline-flex  justify-between w-full px-4 py-4 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-[#CF1CB6]">
                  <span className="mr-2">Buy / Make offer</span>
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
              <div className="w-2/4 inline-flex gap form-control  mb-4  flex-row space-x-4 items-end">
                <input type="checkbox" className="space-x-1 h-5 w-5 input-bordered w-ful bg-white" />
                <p className="font-bold font-sm">Enable Make offer?</p>
              </div>
            </div>
            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text text-zinc-950 text-sm font-bold ">
                  Price <span className="text-[#CF1CB6]">*</span>
                </span>
              </label>
              <input
                type="number"
                placeholder=""
                className="input input-bordered w-full bg-white focus:border-primary-50"
                onChange={(e) => setPrice(e.target.valueAsNumber)}
                required
              />
            </div>
            <div className="form-control w-full mb-4">
              <label className="text-sm font-bold">Feature Image</label>
              <input
                defaultValue={imageUrl}
                type="file"
                className="file-input file-input-bordered mt-1 mb-4"
                onChange={(e) => setImageUrl(e.target.value)}
              />
              <p>* Recommend size 4:7 - 256 H * 373 W in Pixel</p>
            </div>
            <div className="form-control w-full mb-4">
              <label className="text-sm font-bold">Description</label>
              <textarea
                className="textarea textarea-bordered"
                placeholder="Tell more about your art"
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>
            <div className=" inline-flex gap form-control  mb-4  flex-row space-x-4 items-start">
              <input type="checkbox" className="space-x-1 h-5 w-5 input-bordered w-ful bg-white" />
              <p className=" font-sm">
                By placing your order you agree to our Terms & Conditions, privacy and returns policies . You also
                consent to some of your data being stored by ASOS, which may be used to make future shopping experiences
                better for you.
              </p>
            </div>
          </div>

          <button
            type="submit"
            className=" btn btn-block my-4  text-white bg-[#CF1CB6] border-[#CF1CB6] hover:bg-[#A3068D] hover:border-[#A3068D]"
          >
            Edited
          </button>
        </div>
      </form>
    </div>
  )
}

export default Edit
