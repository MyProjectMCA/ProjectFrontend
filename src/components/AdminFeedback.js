import React, { useContext, useEffect } from 'react'
import DineOptimaContext from '../context/Dineoptima/DineOptimaContext';
import { useNavigate } from 'react-router-dom';


function AdminFeedback() {
    const context = useContext(DineOptimaContext);
    const { AdminFeedbackFetch, getallfeedbacksofusers } = context
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("Admintoken")) {
            getallfeedbacksofusers()
        } else {
            navigate("/adminlogin")
        }
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <div className='min-h-screen flex flex-col justify-center items-center'>
                <div className='text-2xl mt-5 font-bold underline'>Feedbacks</div>

                <div className='w-5/6 border-2 border-black m-5'>
                    <div className='flex justify-between m-2'>
                        <div className='w-2/12 flex justify-center font-semibold border-r-2 border-black'>Name</div>
                        <div className='w-3/12 flex justify-center font-semibold border-r-2 border-black'>Email</div>
                        <div className='w-6/12 flex justify-center font-semibold border-r-2 border-black'>Feedback</div>
                        <div className='w-1/12 flex justify-center font-semibold'>Rating</div>
                    </div>
                    <hr className="border-t-2 border-black my-4" />
                    {
                        AdminFeedbackFetch.map((dineInDetails, index) => {
                            return (
                                <div key={index}>
                                    <div className='flex my-5 mx-1 '>
                                        <div className='w-2/12 flex justify-center'>{dineInDetails.name}</div>
                                        <div className='w-3/12 flex justify-center'>{dineInDetails.email}</div>
                                        <div className='w-6/12 flex justify-center overflow-hidden'>{dineInDetails.feedback}</div>
                                        <div className='w-1/12 flex justify-center'>{dineInDetails.rating}</div>
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

export default AdminFeedback