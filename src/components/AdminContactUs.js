import React, { useContext, useEffect } from 'react'
import DineOptimaContext from '../context/Dineoptima/DineOptimaContext';
import { useNavigate } from 'react-router-dom';


function AdminContactus() {
    const context = useContext(DineOptimaContext);
    const { AdminContactUsFetch, getallcontactusofusers } = context
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("Admintoken")) {
            getallcontactusofusers()
        } else {
            navigate("/adminlogin")
        }
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <div className='min-h-screen flex flex-col justify-center items-center'>
                <div className='text-2xl font-bold underline'>CONTACT REQUESTS</div>

                <div className='w-5/6 border-2 border-black m-5'>
                    <div className='flex justify-between m-2'>
                        <div className='w-3/12 flex justify-center font-semibold border-r-2 border-black'>Name</div>
                        <div className='w-3/12 flex justify-center font-semibold border-r-2 border-black'>Email</div>
                        <div className='w-6/12 flex justify-center font-semibold'>Message</div>
                    </div>
                    <hr className="border-t-2 border-black my-4" />
                    {
                        AdminContactUsFetch.map((dineInDetails, index) => {
                            return (
                                <div key={index}>
                                    <div className='flex my-5 mx-1 '>
                                        <div className='w-3/12 flex justify-center'>{dineInDetails.name}</div>
                                        <div className='w-3/12 flex justify-center'>{dineInDetails.email}</div>
                                        <div className='w-6/12 flex justify-center'>{dineInDetails.message}</div>
                                    </div>
                                    <hr className="border-t-2 border-black" />
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default AdminContactus