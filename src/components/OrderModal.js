import React, { useContext } from "react";
import DineOptimaContext from '../context/Dineoptima/DineOptimaContext';


const OrderModal = ({ isOpen, onClose, Order, onchange, handleclick }) => {
    const context = useContext(DineOptimaContext);
    const { availableTimes } = context;
    return (
        <div
            className={`fixed inset-0  ${isOpen ? "flex" : "hidden"
                } items-center justify-center z-50`}
        >
            <div className="fixed inset-0 bg-black opacity-80"></div>
            <div className="bg-white p-6 rounded-lg z-10 w-3/6">
                {/* Modal Content */}
                <h1 className="text-xl font-bold mb-2">Edit Order</h1>

                <p className="text-black font-bold text-base mb-4">Date</p>
                <input
                    type="date" name='edate'
                    className="w-full p-2 border border-gray-300 rounded-lg mb-4 "
                    placeholder="Title Field" value={Order.edate} onChange={onchange}
                />

                <p className="text-black font-bold text-base mb-4">Description</p>
                <select className="w-full p-2 border border-gray-300 rounded-lg mb-4 " type="time" id="res-time" value={Order.time} name='etime' onChange={onchange} required>
                    <option value="">Select a time</option>
                    {availableTimes && availableTimes.map((timeOption) => (
                        <option key={timeOption}>{timeOption}</option>
                    ))}
                </select>

                <p className="text-black font-bold text-base mb-4">Seating</p>
                <input
                    type="number" name='eseating'
                    className="w-full p-2 border border-gray-300 rounded-lg mb-4 "
                    placeholder="0" min="1" max="10" value={Order.eseating} onChange={onchange}
                />

                <p className="text-black font-bold text-base mb-4">Occasion</p>
                                <select className="w-full p-2 border border-gray-300 rounded-lg mb-4 " type="time" id="res-time" value={Order.eoccasion} name='eoccasion' onChange={onchange} required>
                               <option value="">Select an occasion</option>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                            <option>Others</option>
                </select>


                <div className="flex justify-between">

                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                        onClick={handleclick}
                    >
                        Update Order
                    </button>
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderModal;
