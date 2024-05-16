import React, { useContext } from 'react'
import DineOptimaContext from '../context/Dineoptima/DineOptimaContext';
import { Link,useNavigate } from "react-router-dom";

function CheckOut() {

    const context = useContext(DineOptimaContext);
    let { dishCount, addorder, formData, setDishCount, setFormData } = context;
    let subtotal = 0;

    const navigate = useNavigate();

    const handleOrderClick = () => {
        formData.total = subtotal.toFixed(2);
        addorder(dishCount, formData);
        setDishCount([]); // Provide the new value you want to set (an empty array in this case)
        setFormData({
            date: '',
            time: '',
            seating: '',
            occasion: '',
            total:'',
        }); // Provide the new value you want to set (an empty object in this case)
        navigate('/confirmation', { state: { message: "Your reservation has been successfully completed." } });
    }

    
    // Calculate the subtotal
    dishCount.map(dish => {
        const dishCountValue = parseInt(dish.dishcount, 10);
        const dishPriceValue = parseFloat(dish.dishprice.replace('$', ''));
        const totalPrice = dishCountValue * dishPriceValue;
        subtotal += totalPrice;
        return null; // The return value of the map function is not used
    });

    return (
        <div className='min-h-screen flex flex-col justify-center items-center'>
            <div className='text-2xl font-bold'>CHECKOUT</div>
            <div className='w-5/6 border-2 border-black m-5'>
                <div className='flex justify-between m-2'>
                    <div className='w-3/12 flex justify-center font-semibold border-r-2 border-black'>Name</div>
                    <div className='w-3/12 flex justify-center font-semibold border-r-2 border-black'>Count</div>
                    <div className='w-3/12 flex justify-center font-semibold border-r-2 border-black'>Unit Price</div>
                    <div className='w-3/12 flex justify-center font-semibold '>Total Amount</div>
                </div>
                <hr className="border-t-2 border-black my-4" />
                {
                    dishCount.map((dish, index) => {
                        const dishCountValue = parseInt(dish.dishcount, 10); // Parse dishcount to an integer
                        const dishPriceValue = parseFloat(dish.dishprice.replace('$', '')); // Remove '$' and parse dishprice to a float
                        const totalPrice = dishCountValue * dishPriceValue;
                        return (
                            <div key={index}>
                                <div className='flex my-5 mx-1 '>
                                    <div className='w-3/12 flex justify-center'>{dish.dishname}</div>
                                    <div className='w-3/12 flex justify-center'>{dish.dishcount}</div>
                                    <div className='w-3/12 flex justify-center'>{dish.dishprice}</div>
                                    <div className='w-3/12 flex justify-center'>${totalPrice}</div>
                                </div>
                                <hr className="border-t-2 border-black" />
                            </div>
                        )
                    })
                }
                {/* Display the subtotal */}
                <div className='flex justify-between items-center m-2 text-lg font-semibold'>
                    <div className='w-3/12 flex justify-center'>Total:</div>
                    <div className="w-3/12 flex justify-center font-bold">${subtotal.toFixed(2)}</div>
                </div>

            </div>
            <div className='flex justify-between w-10/12'>
                <Link to="/dishlist" className="font-bold text-white bg-blue-500 p-3 rounded-2xl">Back</Link>
                <button className="font-bold text-white bg-blue-500 p-3 rounded-2xl" onClick={handleOrderClick} >Reserve Table</button>
            </div>
        </div>
    )
}

export default CheckOut