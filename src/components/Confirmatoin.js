import React from 'react'
import img from "../Images/tick.png"
import { useLocation } from 'react-router-dom';

function Confirmatoin(props) {
  const location = useLocation();
  const message = location.state && location.state.message ? location.state.message : '';

  return (
    <div className='flex flex-col justify-center items-center h-screen bg-gray-400'>
      <img src={img} alt="tick mark" className='w-2/12' />
      <div className='font-bold text-3xl m-4'>Thank You!</div>
      <div className='font-bold text-2xl'>{message}</div>

    </div>
  )
}

export default Confirmatoin