import { AiOutlinePoweroff } from 'react-icons/ai';
import { MdProductionQuantityLimits } from "react-icons/md";
import { MdOutlineInventory2 } from "react-icons/md";
import { AiOutlineDashboard } from "react-icons/ai";
import { RiAddLine } from "react-icons/ri";
import { FaUserGroup } from "react-icons/fa6";


import Link from 'next/link'

const index = () => {
  return (
    <section>
      <div className="w-full">
        <div className="w-[60%] h-[700px] bg-blue-50 flex flex-col items-center rounded-xl gap-y-12 py-3">
          <Link href="/DashBoard">
          <div className="text-xl text-blue-600 hover:scale-150 ">
          <AiOutlineDashboard />
          </div>
          </Link>
          <Link href="/inventory">
          <div className="text-xl text-blue-600 hover:scale-150 ">
          <MdOutlineInventory2 />
          </div>
          </Link>
          {/* <Link href="/products">
          <div className="text-xl text-blue-600 hover:scale-150">
          <MdProductionQuantityLimits />
          </div>
          </Link> */}
          <Link href="/add_product">
          <div className="text-xl text-blue-600 hover:scale-150 ">
          <RiAddLine />
          </div>
          </Link>
          <Link href="/user">
          <div className="text-xl text-blue-600 hover:scale-150 ">
          <FaUserGroup />
          </div>
          </Link>
          <div style={{ height: '356px' }}></div>
          <div className="text-xl text-blue-600 hover:scale-150 mt-10">
            <AiOutlinePoweroff />
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
