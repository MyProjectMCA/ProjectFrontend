import React, { useContext, useEffect, useState } from 'react';
import DineOptimaContext from '../context/Dineoptima/DineOptimaContext';
import { useNavigate } from 'react-router-dom';

const DishIngredients = () => {
  const context = useContext(DineOptimaContext);
  const { dishesData, AdminDineinOrdersFetch, getallordersofusers } = context;
  const navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().substr(0, 10)); // Initialize with current date

  const [dishCounts, setDishCounts] = useState({});

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    setDishCounts({}); // Clear the counts when the date changes
  };

  useEffect(() => {
    if (localStorage.getItem("Admintoken")) {
      getallordersofusers();
      navigate("/inventory");
    } else {
      navigate("/adminlogin");
    }
    // eslint-disable-next-line
  }, []);

  // Loop through the orders and count the dishes for the selected date
  AdminDineinOrdersFetch.forEach(order => {
    const orderDate = new Date(order.orderDetails.date).toISOString().substr(0, 10);

    if (orderDate === selectedDate) {
      order.foodList.forEach(dish => {
        const dishName = dish.dishname;
        if (dishCounts[dishName]) {
          dishCounts[dishName]++;
        } else {
          dishCounts[dishName] = 1;
        }
      });
    }
  });

  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <div className='text-2xl font-bold underline m-5'>INVENTORY</div>

      {/* Add date filter */}
      <div className="flex justify-center items-center m-5">
        <label className="font-semibold">Filter by Date:</label>
        <input
          type="date"
          className="border border-black ml-2 p-1"
          onChange={handleDateChange}
        />
      </div>

      <div className='w-5/6 border-2 border-black m-5'>
        <div className='flex justify-between m-2'>
          <div className='w-3/12 flex justify-center font-semibold border-r-2 border-black'>Dish</div>
          <div className='w-7/12 flex justify-center font-semibold border-r-2 border-black'>Ingredients</div>
          <div className='w-2/12 flex justify-center font-semibold '>Quantitiy</div>
        </div>
        <hr className="border-t-2 border-black my-4" />
        {
          dishesData.dishes.map((dish, index) => {
            return (
              <div key={index}>
                <div className='flex my-5 mx-1 '>
                  <div className='w-3/12 flex justify-center'>{dish.dishName}</div>
                  <div className='w-7/12 flex justify-center'>{dish.ingredients}</div>
                  <div className='w-2/12 flex justify-center'>{dishCounts[dish.dishName] || 0}</div>
                </div>
                <hr className="border-t-2 border-black" />
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default DishIngredients;
