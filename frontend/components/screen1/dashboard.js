import { BiHomeAlt } from 'react-icons/bi';
import { BsCalendar2Date } from 'react-icons/bs';
import Cost from '../dash_cards/cost_card';
import Consumption from '../consumption/index';
import { useState, useEffect } from 'react';

import { AiOutlineDashboard } from "react-icons/ai";
const screen = () => {
  const [dashboardData, setDashboardData] = useState({
    total_value: 0,
    category_count: 0,
    item_count: 0,
    low_stock: 0,
    out_of_stock: 0
  });
  useEffect(()=> {
    fetch('http://127.0.0.1:8000/api/get-stats', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
       setDashboardData(data)
      })
      .catch((error) => {
       console.error('Error:', error);
       return 'An error occurred'
      });
  })
 

  const getCurrentDate = () => {
    const currentDate = new Date();
    return currentDate.toLocaleDateString('en-US');
  };
  return (

    <section>
      <div>
        <div className="bg-blue-50 rounded-lg py-5 h-[700px]">
          <div className="pl-3 mb-10 pr-20">
            <div className="w-full bg-white flex justify-between items-center px-5 py-3 rounded-lg shadow-md">
              <div className="flex items-center gap-x-5">
                <div>
                <AiOutlineDashboard />
                </div>
                <div>
                  <p>DashBoard</p>
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

          <div className="w-full pl-3">
            <div className="grid grid-cols-7">
              <div className="col-span-5 pr-3">
                <Cost total_value = {dashboardData.total_value} category_count = {dashboardData.category_count} total_items={dashboardData.item_count}/>
                <Consumption low_stock={dashboardData.low_stock} out_of_stock = {dashboardData.out_of_stock}/>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default screen;