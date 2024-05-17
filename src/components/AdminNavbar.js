import React, { useState } from 'react';
import hamburger from "../Images/hamburger.png";
import cross from "../Images/cross.png";
import backgroundImage from '../Images/background.jpg';
import { Link, useLocation, useNavigate } from "react-router-dom";

function AdminNavbar(props) {
    const { toggleNavbar } = props
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    let location = useLocation();
    const navigate = useNavigate();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('Admintoken');
        navigate("/adminlogin")
    }

    const navigateOnSwitch = () => {
        navigate("/")
    }

    return (
        <nav className={`relative z-10 bg-cover bg-top`}
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className={`flex items-center justify-between bg-gray-900 bg-opacity-50 p-4`}>
                <div className="px-2 mx-3 font-bold text-white border-4 border-white border-double cursor-pointer" onClick={() => { toggleNavbar(); navigateOnSwitch() }}>AdminHotelEase</div>
                <div className="hidden space-x-4 md:flex">
                    <Link to="/adminHome" className={`font-bold  hover:text-white ${location.pathname === "/adminHome" ? "text-white" : "text-gray-400"}`}>Home</Link>
                    <Link to="/orders" className={`font-bold  hover:text-white ${location.pathname === "/orders" ? "text-white" : "text-gray-400"}`}>Ordres</Link>
                    <Link to="/inventory" className={`font-bold  hover:text-white ${location.pathname === "/inventory" ? "text-white" : "text-gray-400"}`}>Inventory</Link>
                    <Link to="/adminfeedback" className={`font-bold  hover:text-white ${location.pathname === "/adminfeedback" ? "text-white" : "text-gray-400"}`}>Feedbacks</Link>
                    <Link to="/adminContactus" className={`font-bold  hover:text-white ${location.pathname === "/adminContactus" ? "text-white" : "text-gray-400"}`}>ContactRequests</Link>

                    {!localStorage.getItem("Admintoken") ? <div>
                        <Link to="/adminlogin" className="font-bold text-blue-500 underline hover:text-white mr-4">Login</Link>
                        <Link to="/adminsignin" className="font-bold text-blue-500 underline hover:text-white">SignUp</Link>
                    </div> : <button onClick={handleLogout} className="font-bold text-blue-500 underline hover:text-white">LogOut</button>}
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? (
                            <img src={cross} alt="cross" className="w-8 h-8 " />
                        ) : (
                            <img src={hamburger} alt="hamburger" className="w-8 h-8 " />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="fixed bottom-0 left-0 right-0 z-20 p-4 bg-gray-700 md:hidden top-16 opacity-95">
                    <div className="flex flex-col text-center space-y-7">
                        <hr className='mt-5 border-2 border-black' />
                        <Link to="/" className='p-4 text-xl font-bold text-gray-400 border-2 border-black'>Home</Link>
                        <Link to="/about" className='p-4 text-xl font-bold text-gray-400 border-2 border-black'>About</Link>
                        <a href="/" className='p-4 text-xl font-bold text-gray-400 border-2 border-black'>Services</a>
                        <Link to="/contact" className='p-4 text-xl font-bold text-gray-400 border-2 border-black'>Contact</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default AdminNavbar;
