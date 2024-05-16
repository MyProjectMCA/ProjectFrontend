import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import DineOptimaContext from '../context/Dineoptima/DineOptimaContext';


function Feedback() {
    const navigate = useNavigate();
    const context = useContext(DineOptimaContext);
    const { addfeedback } = context;

    useEffect(() => {
        if (localStorage.getItem("token")) {
        } else {
            navigate("/login")
        }
        // eslint-disable-next-line
    }, [])

    const [feedbackData, setFeedbackData] = useState({
        myname: '',
        email: '',
        feedback: '',
        rating: 0,
    });

    const onInputChange = (e) => {
        const { name, value } = e.target;
        setFeedbackData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const handleEmailChange = (e) => {
        const { value } = e.target;
        const isValid = validateEmail(value);
        if (!isValid) {
          e.target.setCustomValidity('Please enter a valid email address.');
        } else {
          e.target.setCustomValidity('');
        }
        onInputChange(e);
      };

    const onRatingChange = (newRating) => {
        setFeedbackData((prevData) => ({
            ...prevData,
            rating: newRating,
        }));
    };



    const onClickSubmit = (e) => {
        e.preventDefault()
        const { myname, email, feedback, rating } = feedbackData;
        addfeedback(myname, email, feedback, rating)
        navigate('/confirmation', { state: { message: "We Appreciate Your Feedback" } });
    }

    return (
        <div className=''>
            <h1 className="flex justify-center pt-8 text-4xl font-bold">Feedback</h1>
            <div className='items-center justify-center h-screen md:flex '>
                <div className="flex justify-center mx-2 border-black md:items-center h-5/6 md:border-2 rounded-2xl md:mx-20 ">
                    <div className="flex-col flex-1 hidden left md:flex">
                        {/* <h1 className='mx-5 my-5 text-3xl font-bold'>Welcome to our Feedback Form!</h1> */}
                        <p className="bookingDescription text-base mx-10 font-semibold text-center">"We value your feedback! Please share any suggestions, comments, or concerns you may have about your experience. Your input helps us continually enhance our services and ensure your future visits are even more enjoyable."</p>
                    </div>
                    <div className="flex flex-col flex-1 right m-5">
                        <form className="p-8 space-y-4 border-2 border-black rounded-lg" onSubmit={onClickSubmit}>
                            <div className=''>
                                <label htmlFor="name" className="block mb-1 font-semibold">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="myname"
                                    className="w-full p-2  border-2 border-gray-400 rounded"
                                    value={feedbackData.myname}
                                    onChange={onInputChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-1 font-semibold">Emaile</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full p-2   border-2 border-gray-400 rounded"
                                    value={feedbackData.email}
                                    onChange={handleEmailChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block mb-1 font-semibold">Feedback</label>
                                <textarea
                                    id="message"
                                    name="feedback"
                                    className="resize-none w-full min-h-[100px] rows-4  border-2 border-gray-400  rounded p-2"
                                    value={feedbackData.feedback}
                                    onChange={onInputChange}
                                    required
                                    >
                                </textarea>
                            </div>

                            {/* star rating */}
                            <div className="flex items-center space-x-2">
                                <p className="font-semibold">Rate your experience:</p>
                                <div className="flex space-x-1">
                                    {[1, 2, 3, 4, 5].map((value) => (
                                        <span
                                            key={value}
                                            className={`cursor-pointer text-2xl ${feedbackData.rating >= value ? 'text-yellow-500' : 'text-gray-400'
                                                }`}
                                            onClick={() => onRatingChange(value)}
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>
                            </div>


                            <button type="submit" className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Feedback