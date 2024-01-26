import { BsCalendar2Date } from 'react-icons/bs';
import Low_Detail from "../low_items/low_stock_details";
import { VscFoldDown } from "react-icons/vsc";
import  React , { useState, useEffect } from 'react';



const inventory_pages = () => {
  const [itemData , setItemData] = useState([])
    useEffect(()=> {
      fetch('http://127.0.0.1:8000/api/get-low-stock/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
       setItemData(data["items"])
      })
      .catch((error) => {
       console.error('Error:', error);
       return 'An error occurred'
      });
    },  [])

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
                <div className='text-orange-500'>
                <VscFoldDown />
                </div>
                <div className='text-orange-500'>
                  <p>Low Stocks</p>
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
                <Low_Detail itemData={itemData}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default inventory_pages;
