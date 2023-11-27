const Banner = () => {
  return (
    <div className="w-[1072px] h-[187px] mx-auto bg-fuchsia-100 rounded-2xl my-20 p-4">
      <div className="flex mb-6 static ">
        <img src="src/assets/ArtHub Logo.svg" />
        <div>
          <img className="absolute right-[350px] top-[325px]" src="src/assets/Explode Shape.svg" />
          <img className="absolute right-[430px] top-[230px]" src="src/assets/Star Abstract Shape1.svg" />
          <img className="absolute right-[150px] top-[300px]" src="src/assets/Star Abstract Shape2.svg" />
          <img className="absolute right-[270px] top-[410px]" src="src/assets/Star Abstract Shape3.svg" />
          <img className="absolute right-[200px] top-[195px]" src="src/assets/Abstract Shape.svg" />
          <img className="absolute right-[100px] top-[370px]" src="src/assets/Cube Abstract Shape.svg" />
        </div>
      </div>
      <p className="text-zinc-950 font-bold text-[26px] ">The art place for all collector</p>
      <p className="badge badge-outline font-semibold text-zinc-600 my-8">view new art</p>
    </div>
  )
}

export default Banner
