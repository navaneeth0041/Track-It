import { IoAddCircleOutline } from "react-icons/io5";
import { PiUsersThreeBold } from "react-icons/pi";
import { IoTrendingDownOutline } from "react-icons/io5";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { GrHomeRounded } from "react-icons/gr";
import { LuPackageX } from "react-icons/lu";
import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar = () => {
  const router = useRouter();

  return (
    <section>
      <div className="w-full">
        <div className="w-[60%] h-[700px] bg-blue-50 flex flex-col items-center rounded-xl gap-y-12 py-3">
          <Link href="/DashBoard">
            <div className={`text-xl text-blue-600 ${router.pathname === '/DashBoard' || router.pathname ==='/' ? 'bg-blue-200 rounded-md w-12 h-12 flex items-center justify-center' : ''} hover:scale-110`}>
            <GrHomeRounded />
            </div>
          </Link>
          <Link href="/inventory">
            <div className={`text-xl text-blue-600 ${router.pathname === '/inventory' ? 'bg-blue-200 rounded-md w-12 h-12 flex items-center justify-center' : ''} hover:scale-110`}>
              <HiOutlineClipboardDocumentList/>
            </div>
          </Link>
          <Link href="/add_product">
            <div className={`text-xl text-blue-600 ${router.pathname === '/add_product' ? 'bg-blue-200 rounded-md w-12 h-12 flex items-center justify-center' : ''} hover:scale-110`}>
            <IoAddCircleOutline />
            </div>
          </Link>
          <Link href="/out_stock">
            <div className={`text-xl text-blue-600 ${router.pathname === '/out_stock' ? 'bg-blue-200 rounded-md w-12 h-12 flex items-center justify-center' : ''} hover:scale-110`}>
            <LuPackageX />
            </div>
          </Link>
          <Link href="/low_stock">
            <div className={`text-xl text-blue-600 ${router.pathname === '/low_stock' ? 'bg-blue-200 rounded-md w-12 h-12 flex items-center justify-center' : ''} hover:scale-110`}>
              <IoTrendingDownOutline />
            </div>
          </Link>
          <Link href="/user">
            <div className={`text-xl text-blue-600 ${router.pathname === '/user' ? 'bg-blue-200 rounded-md w-12 h-12 flex items-center justify-center' : ''} hover:scale-110`}>
              <PiUsersThreeBold />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
