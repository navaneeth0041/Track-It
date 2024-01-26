import Link from 'next/link'

/* eslint-disable @next/next/no-img-element */
const cost = () => {
  return (
    <div>
      <div className="w-full grid grid-cols-2 lg:mt-8 xl:mt-4 2xl:mt-8 gap-x-4">
      <Link href="/low_stock">
      <div className="bg-white shadow-md px-4 py-2 lg:h-64 xl:h-48 rounded-lg">
        <div className="flex justify-center items-center h-[10%] py-5">
          <p className="text-lg font-bold text-orange-500">Low Stock</p>
          </div>
          
          <div className="flex justify-center items-center h-[10%] py-5">
          <p className="text-lg font-bold text- black-200">258</p>
          </div>



          <div className="h-[90%] flex  items-center justify-between  gap-y-10 ">
            <div className="h-[15%]">
              <img alt="icon" className="h-full" src="/arrow.png"></img>
            </div>
            <div className="h-[10%]">
                <img alt="icon" src="/external-link.png" className="h-full"></img>
              </div>
          </div>
        </div>
        </Link>

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