import React from 'react'

function FoodBasket(props) {
    const { uniqueDishes } = props;
    return (
        <>
            {uniqueDishes > 0 &&
                <div className="flex justify-between fixed bottom-0 left-0 right-0 p-4 bg-gray-600 text-white">
                    <p className="text-xl font-semibold">Food Basket</p>
                    <p className="text-lg flex">No Items : {uniqueDishes} </p>
                </div>
            }
        </>
    )
}

export default FoodBasket