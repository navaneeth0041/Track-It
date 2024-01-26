/* eslint-disable @next/next/no-img-element */
const cost = () => {
  return (
    <div>
      <div className="w-full grid grid-cols-3 lg:mt-10 xl:mt-10 2xl:mt-10 gap-x-4">
        <div className="bg-white shadow-md px-4 py-2 lg:h-40 xl:h-40 rounded-lg ">
        <div className="flex justify-center items-center h-[10%] py-7">
<p className="text-lg font-bold">Total Cost  </p>
          </div>

          <div className="h-[90%] flex items-center justify-left">
            <div className="h-[30%]">
              <img alt="icon" src="/earning.png" className="h-full"></img>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md px-4 py-2 lg:h-52 xl:h-40 rounded-lg">
        <div className="flex justify-center items-center h-[10%] py-7">
          <p className="text-lg font-bold">Category</p>
          </div>

          <div className="h-[90%] flex  items-center justify-left gap-y-3 ">
            <div className="h-[25%]">
              <img alt="icon" className="h-full" src="/categories.png"></img>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md px-4 py-2 lg:h-40 xl:h-40 rounded-lg">
      <div className="flex justify-center items-center h-[10%] py-7">
<p className="text-lg font-bold">Total Iems</p>
        </div>

        <div className="h-[90%] flex items-center justify-left">
          <div className="h-[30%]">
            <img alt="icon" src="/item.png" className="h-full"></img>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default cost;
