import React from 'react'
import backgroundImage from '../Images/AdminBackground.jpg'
import { useNavigate } from 'react-router-dom';

function AdminHome() {
    const navigate = useNavigate();

    const onclickSubmit = ()=>{
        navigate("/orders")
    }

    return (
        <>
            <div
                className="flex flex-col h-screen bg-center bg-cover"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className='flex items-center justify-center md:flex-grow'>
                    <div className="p-6 bg-gray-600 bg-opacity-50 rounded-lg md:text-center ">
                        <h1 className="mb-2 text-4xl font-bold text-white">Admin Panel</h1>
                        <p className="mb-2 text-lg text-white ">Your Gateway to Efficient Management and Oversight.</p>
                        <button onClick={onclickSubmit} className='p-3 font-bold text-white bg-black rounded-lg opacity-70 hover:text-gray-400'>Get Started</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminHome