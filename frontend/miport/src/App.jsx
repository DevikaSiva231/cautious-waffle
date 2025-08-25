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
    <div className="space-y-20">
        <div className="w-full text-center text-lg font-semibold">
          - - - Categories - - -
        </div>

        <div className="relative grid grid-cols-4 gap-4 p-4">
          <div className="bg-gray-200 h-[85vh] rounded-lg">Image 1</div>
          <div className="bg-gray-200 h-[85vh] rounded-lg">Image 2</div>
          <div className="bg-gray-200 h-[85vh] rounded-lg">Image 3</div>
          <div className="bg-gray-200 h-[85vh] rounded-lg">Image 4</div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg px-32 py-4 z-10">
            <h2 className="text-xl font-bold text-center">Sketch Art</h2>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 p-4">
          <div className="col-span-3 bg-gray-200">Image 1</div>
          <div className="bg-gray-200 h-[85vh]">Card</div>
        </div>

        <div className="grid grid-cols-3 gap-4 p-4">
          <div className="bg-gray-200 h-[85vh] rounded-lg">Image 1</div>
          <div className="bg-gray-200 h-[85vh] rounded-lg">Image 2</div>
          <div className="bg-gray-200 h-[85vh] rounded-lg">Image 3</div>
        </div>

      </div>
    </div>
  </div>
  )
}