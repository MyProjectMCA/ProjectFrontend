import React, { useContext } from 'react'
import DineOptimaContext from '../context/Dineoptima/DineOptimaContext';

function OrderItem(props) {
    const context = useContext(DineOptimaContext);
    const { deleteorder } = context
    const { order, updaeOrder } = props
    return (
        <div>
            <div className='m-3'>
                <div className="p-6 bg-gray-800 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                    <div className="flex justify-center">
                    <p className="mb-2 mr-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Reservation No:</p>
                    <p className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{props.index + 1}</p>
                    </div>

                    <div className='items-center'>
                        <div className="flex">
                            <p className="mb-2 mr-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Date:</p>
                            <p className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{order.orderDetails.date}</p>
                        </div>

                        <div className="flex">
                            <p className="mb-2 mr-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Time:</p>
                            <p className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{order.orderDetails.time}</p>
                        </div>

                        <div className="flex">
                            <p className="mb-2 mr-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Seating:</p>
                            <p className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{order.orderDetails.seating}</p>
                        </div>
                        <div className="flex">
                            <p className="mb-2 mr-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Occasion:</p>
                            <p className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{order.orderDetails.occasion}</p>
                        </div>

                        <div className="flex justify-center m-2">
                        <i className="fa-regular fa-trash-can text-white mx-3 " onClick={() => { deleteorder(order._id); props.showAlert("Deleted order Successfully", "green") }}></i>
                        <i className="fa-regular fa-pen-to-square text-white" onClick={() => { updaeOrder(order) }}></i>
                        </div>

                    </div>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Order Total: {order.orderDetails.total}</p>
                </div>
            </div>
        </div>
    )
}

export default OrderItem