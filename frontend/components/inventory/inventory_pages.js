  import { BsCalendar2Date } from 'react-icons/bs';
  import { MdInventory } from "react-icons/md";
  import Details from "../details/inv_details";
  import React, { useState, useEffect } from 'react';
  
  const inventory_pages = () => {
    const [itemData , setItemData] = useState([])
    
    useEffect(()=> {
      fetch('http://127.0.0.1:8000/api/get-items', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
       setItemData(data)
      })
      .catch((error) => {
       console.error('Error:', error); 
       return 'An error occurred'
      });
    },  [])
    const [searchText , setSearchText] = useState("")

    const filteredItems = searchText ? itemData.filter(item => 
      item.item_name.toLowerCase().includes(searchText.toLowerCase())
    ):itemData;


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
                  <div>
                  <MdInventory />
                  </div>
                  <div>
                    <p>Inventory</p>
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
                <div className='col-span-12 pr-3 '>
                <input
                  type="text"
                  placeholder="Search items..."
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className="w-[500px] p-2 mb-3 bg-blue-100 border border-gray-300 p-2 focus:outline-none rounded-md mb-3"
                />
                  <Details itemData={filteredItems}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default inventory_pages;
