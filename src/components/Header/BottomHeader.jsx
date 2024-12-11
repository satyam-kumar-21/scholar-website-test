import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BottomHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="bg-[#2C3E50] text-[#BDC3C7] shadow-md">
            <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <div className="flex items-center space-x-4">
                    <img src="logo.png" alt="College Logo" className="w-12 h-12" />
                </div>

                {/* Right Section: Main Navigation Links */}
                <nav className="hidden md:flex space-x-8">

                    <Link to="/" className="font-bold text-[#BDC3C7] hover:text-[#F39C12] transition duration-200">
                        Home
                    </Link>
                    <Link to="/about" className="font-bold text-[#BDC3C7] hover:text-[#F39C12] transition duration-200">
                        About Us
                    </Link>
                    <Link to="/courses" className="font-bold text-[#BDC3C7] hover:text-[#F39C12] transition duration-200">
                        Courses We Provide
                    </Link>
                    <Link to="/infrastructure" className="font-bold text-[#BDC3C7] hover:text-[#F39C12] transition duration-200">
                        Infrastructure
                    </Link>
                    <Link to="/placement" className="font-bold text-[#BDC3C7] hover:text-[#F39C12] transition duration-200">
                        Placement
                    </Link>
                    <Link to="/contact" className="font-bold text-[#BDC3C7] hover:text-[#F39C12] transition duration-200">
                        Contact Us
                    </Link>

                    {/* Highlighted Scholar Info Link */}
                    <Link
                        to="/scholar-info"
                        className="font-bold text-white bg-[#FF6347] hover:bg-[#FF4500] py-2 px-6 rounded-lg transition duration-300 transform hover:scale-105"
                    >
                        Scholar Info
                    </Link>
                </nav>

                {/* Mobile Hamburger Menu */}
                <div className="lg:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu (Appears when hamburger icon is clicked) */}
            {isMenuOpen && (
                <div className="lg:hidden bg-[#2C3E50] text-[#BDC3C7] shadow-md">
                    <ul className="flex flex-col space-y-4 px-6 py-4">
                        <li>
                            <Link to="/" className="font-bold text-[#BDC3C7] hover:text-[#F39C12]">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className="font-bold text-[#BDC3C7] hover:text-[#F39C12]">About Us</Link>
                        </li>
                        <li>
                            <Link to="/courses" className="font-bold text-[#BDC3C7] hover:text-[#F39C12]">Courses We Provide</Link>
                        </li>
                        <li>
                            <Link to="/infrastructure" className="font-bold text-[#BDC3C7] hover:text-[#F39C12]">Infrastructure</Link>
                        </li>
                        <li>
                            <Link to="/placement" className="font-bold text-[#BDC3C7] hover:text-[#F39C12]">Placement</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="font-bold text-[#BDC3C7] hover:text-[#F39C12]">Contact Us</Link>
                        </li>
                        {/* Highlighted Scholar Info in Mobile Menu */}
                        <li>
                            <Link
                                to="/scholar-info"
                                className="font-bold text-white bg-[#FF6347] hover:bg-[#FF4500] py-2 px-6 rounded-lg transition duration-300 transform hover:scale-105"
                            >
                                Scholar Info
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default BottomHeader;
