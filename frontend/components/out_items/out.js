import { BsCalendar2Date } from 'react-icons/bs';
import Out_Detail from "../out_items/out_stock_details";
import { VscFoldDown } from "react-icons/vsc";

const itemData = [
  {
    "item_name": "Widget A",
    "product_id": "P001",
    "quantity": 100,
    "unit": ["piece"],
    "group": "Electronics",
    "cost": 25.99
  },
  {
    "item_name": "Gizmo B",
    "product_id": "P002",
    "quantity": 50,
    "unit": ["piece"],
    "group": "Gadgets",
    "cost": 12.49
  },
  {
    "item_name": "Tool C",
    "product_id": "P003",
    "quantity": 30,
    "unit": ["piece"],
    "group": "Tools",
    "cost": 8.75
  },
  {
    "item_name": "Raw Material X",
    "product_id": "P004",
    "quantity": 500,
    "unit": ["kg"],
    "group": "Materials",
    "cost": 2.5
  }
];

const out_pages = () => {
  const getCurrentDate = () => {
    const currentDate = new Date();
    return currentDate.toLocaleDateString('en-US');
  };
  return (
    <section>
      <div>
        <div className="bg-blue-50 rounded-lg py-3 h-[700px] overflow-y-auto">
          <div className="pl-3 mb-10 pr-20">
            <div className="w-full bg-white flex justify-between items-center px-5 py-3 rounded-lg shadow-md">
              <div className="flex items-center gap-x-5">
                <div className='text-red-800'>
                <VscFoldDown />
                </div>
                <div className='text-red-800'>
                  <p>Out Stocks</p>
                </div>
              </div>
              <div className="flex items-center gap-x-5">
                <div>
                  <BsCalendar2Date />
                </div>
                <div>
                  {' '}
                  <p>{getCurrentDate()}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full pl-3 pr-3">
            <div className='grid grid-cols-12'>
              <div className='col-span-12 pr-3'>
                <Out_Detail itemData={itemData}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default out_pages;
