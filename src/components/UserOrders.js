import React, { useContext, useEffect, useState } from 'react'
import DineOptimaContext from '../context/Dineoptima/DineOptimaContext';
import OrderItem from './OrderItem';
import OrderModal from './OrderModal';
import { useNavigate } from 'react-router-dom';

function UserOrders(props) {
    const context = useContext(DineOptimaContext);
    const { getmyorders, myOrders, editorder } = context
    const [modalOpen, setModalOpen] = useState(false);
    const [Order, setOrder] = useState({ id: "", edate: "", etime: "", eseating: "", eoccasion: "", etotal:"" })
    const navigate = useNavigate();


    useEffect(() => {
        if (localStorage.getItem("token")) {
            getmyorders()
            navigate("/userorders")
        } else {
            navigate("/login")
        }
        // eslint-disable-next-line
    }, [])

    const closeModal = () => {
        setModalOpen(false);
    };

    const handleClick = (e) => {
        e.preventDefault();
        // addnote(note.title,note.description,note.tag)
        const updatedOrder = { date: Order.edate, time: Order.etime, seating: Order.eseating, occasion: Order.eoccasion, total: Order.etotal }
        const orderId = Order.id
        editorder(orderId, updatedOrder)
        closeModal()
        props.showAlert("Edited Order successfully", "green")
    }

    const onchange = (e) => {
        setOrder({ ...Order, [e.target.name]: e.target.value })
    }



    const updaeOrder = (currentNote) => {
        setModalOpen(true);
        //we change title to etitle because it gives an error (where in currentNote consist same name title etc)
        // which is not posible to directly assign
        setOrder({
            id: currentNote._id,
            edate: currentNote.orderDetails.date,
            etime: currentNote.orderDetails.time,
            eseating: currentNote.orderDetails.seating,
            eoccasion: currentNote.orderDetails.occasion,
            etotal:currentNote.orderDetails.total
        })
    }

    return (
        <div className="min-h-screen">
            {/* modal to display for editing the note */}
            <OrderModal isOpen={modalOpen} onClose={closeModal} Order={Order} onchange={onchange} handleclick={handleClick} />
            <h1 className="text-center text-black p-5 text-3xl font-bold">RESERVATIONS</h1>
            <div className='flex flex-wrap justify-center'>
                {/* if we don't have anything in else part we use && */}
                {myOrders.length === 0 && "No Orders to display "}
                {myOrders.map((order,index) => {
                    return <OrderItem key={order._id} order={order} index={index} updaeOrder={updaeOrder} showAlert={props.showAlert} />
                })}
            </div>
        </div>
    )
}

export default UserOrders