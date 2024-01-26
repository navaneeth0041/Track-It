/* eslint-disable @next/next/no-img-element */
const cost = () => {
  return (
    <div>
      <div className="w-full grid grid-cols-2 lg:mt-8 xl:mt-4 2xl:mt-8 gap-x-4">
      <div className="bg-white shadow-md px-4 py-2 lg:h-52 xl:h-40 rounded-lg">
        <div className="flex justify-center items-center h-[10%] py-7">
          <p className="text-lg font-bold text-orange-500">Low Stock</p>
          </div>

          <div className="h-[90%] flex  items-center justify-left gap-y-3 ">
            <div className="h-[35%]">
              <img alt="icon" className="h-full" src="/arrow.png"></img>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md px-4 py-2 lg:h-40 xl:h-40 rounded-lg">
          <div className="flex justify-center items-center h-[10%] text-red-800 py-7">
  <p className="text-lg font-bold">Out Of Stock</p>
            </div>

            <div className="h-[90%] flex items-center justify-left">
              <div className="h-[30%]">
                <img alt="icon" src="/out-of-stock.png" className="h-full"></img>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default cost;