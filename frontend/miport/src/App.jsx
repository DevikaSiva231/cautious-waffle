export default function App() {
  return (
    <div className="window bg-base-100 border border-base-300">
    <div className="relative h-84 flex items-center">
      {/* Shifted Background Image */}
      <img
        src="https://artincontext.org/wp-content/uploads/2023/10/Claude-Monet-Paintings.jpg"
        alt="Background"
        className="ml-24 h-full w-1/2 object-cover rounded"
      />

      {/* Text just to the right of the image, overlapping it slightly */}
      <div className="-ml-40 z-10">
        <h1 className="text-black text-xl font-bold p-3 rounded">
          Hello! Welcome to mi Galleria
        </h1>
      </div>
    </div>
    <div className="relative h-84 p-12">
      <div className="w-full text-center text-lg font-semibold">- - - Categories - - -</div>
    </div>

  </div>
  )
}