import React, { useContext } from 'react'
import DineOptimaContext from '../context/Dineoptima/DineOptimaContext';

function DishCard(props) {

    const context = useContext(DineOptimaContext);
    const {  dishCount, setDishCount,dishesData } = context;


    const AddDishCount = (dishNameToCount,dishPriceToCount) => {
        const updatedDishCount = [...dishCount];
        const existingIndex = updatedDishCount.findIndex((dish) => dish.dishname === dishNameToCount);

        if (existingIndex !== -1) {
            updatedDishCount[existingIndex].dishcount += 1;
        } else {
            updatedDishCount.push({ dishname: dishNameToCount,dishprice:dishPriceToCount, dishcount: 1 });
        }

        setDishCount(updatedDishCount);
    }

    const removeDishCount = (dishNameToRemove) => {
        const updatedDishCount = [...dishCount];
        const existingIndex = updatedDishCount.findIndex(dish => dish.dishname === dishNameToRemove);

        if (existingIndex !== -1) {
            if (updatedDishCount[existingIndex].dishcount > 1) {
                updatedDishCount[existingIndex].dishcount -= 1;
            } else {
                updatedDishCount.splice(existingIndex, 1);
            }
            setDishCount(updatedDishCount);
        }
    }

    return (
        <div>
            <div className=''>
                {dishesData.dishes.map((dish, index) => (
                    <div key={index} className='m-4 h-2/6 border-2 border-black flex justify-between items-center rounded-2xl'>
                        <div className='flex h-full'>
                            <div className=' w-1/6 p-1'><img src={dish.imageUrl} alt="" className="w-full h-full object-cover rounded-2xl" /></div>
                            <div className='flex justify-center flex-col ml-10'>
                                <h2><strong>{dish.dishName}</strong></h2>
                                <p>Price: {dish.price}</p>
                                <p>Ingredients: {dish.ingredients}</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                                <button className='bg-blue-300 rounded-2xl px-4 py-3 m-2' onClick={()=>{removeDishCount(dish.dishName)}}>REMOVE</button>
                            <div className='showCount bg-blue-300 px-5 py-3 rounded-2xl'>
                                {dishCount.map((dishCountItem, countIndex) => (
                                    dishCountItem.dishname === dish.dishName && (
                                        <span key={countIndex}>{dishCountItem.dishcount}</span>
                                    )
                                ))}
                                {/* Display 0 if dish count is not found .every returns boolean its easy to check for existance of value(dish) */}
                                {dishCount.every(dishCountItem => dishCountItem.dishname !== dish.dishName) && (
                                    <span>0</span>
                                )}
                            </div>
                                <button className='bg-blue-300 rounded-2xl px-8 py-3 m-2'  onClick={()=>{AddDishCount(dish.dishName,dish.price)}}>ADD</button>
                        </div>

                    </div>
                ))}
            </div>

        </div >
    )
}

export default DishCard