const Banner = () => {
  return (
    <div className="w-[1072px] h-[187px] mx-auto bg-fuchsia-100 rounded-2xl my-20 p-4">
      <div className="flex mb-6 static ">
        <img src="/images/ArtHubLogo.svg" />
        <div>
          <img className="absolute right-[350px] top-[325px]" src="/images/ExplodeShape.svg" />
          <img className="absolute right-[430px] top-[230px]" src="/images/StarAbstractShape1.svg" />
          <img className="absolute right-[150px] top-[300px]" src="/images/StarAbstractShape2.svg" />
          <img className="absolute right-[270px] top-[410px]" src="/images/StarAbstractShape3.svg" />
          <img className="absolute right-[200px] top-[195px]" src="/images/AbstractShape.svg" />
          <img className="absolute right-[100px] top-[370px]" src="/images/CubeAbstractShape.svg" />
        </div>
      </div>
      <p className="text-zinc-950 font-bold text-[26px] ">The art place for all collector</p>
      <p className="badge badge-outline font-semibold text-zinc-600 my-8">view new art</p>
    </div>
  )
}

export default Banner
