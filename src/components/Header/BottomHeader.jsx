import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../src/assets/important/jsrlogo.png"

const BottomHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="bg-[#ECF0F1] text-[#2C3E50] shadow-md"> {/* Updated background and text color */}
            <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <div className="flex items-center space-x-4">
                    <img src={logo} alt="College Logo" className="w-12 h-12" />
                </div>

                {/* Right Section: Main Navigation Links */}
                <nav className="hidden md:flex space-x-8">

                    <Link to="/" className="font-bold text-[#2C3E50] hover:text-[#F39C12] transition duration-200">
                        Home
                    </Link>
                    <Link to="/about" className="font-bold text-[#2C3E50] hover:text-[#F39C12] transition duration-200">
                        About Us
                    </Link>
                    <Link to="/courses" className="font-bold text-[#2C3E50] hover:text-[#F39C12] transition duration-200">
                        Courses We Provide
                    </Link>
                    <Link to="/infrastructure" className="font-bold text-[#2C3E50] hover:text-[#F39C12] transition duration-200">
                        Infrastructure
                    </Link>
                    <Link to="/placement" className="font-bold text-[#2C3E50] hover:text-[#F39C12] transition duration-200">
                        Placement
                    </Link>
                    <Link to="/contact" className="font-bold text-[#2C3E50] hover:text-[#F39C12] transition duration-200">
                        Contact Us
                    </Link>

                </nav>

                {/* Mobile Hamburger Menu */}
                <div className="lg:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-[#2C3E50]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu (Appears when hamburger icon is clicked) */}
            {isMenuOpen && (
                <div className="lg:hidden bg-[#ECF0F1] text-[#2C3E50] shadow-md"> {/* Updated background and text color */}
                    <ul className="flex flex-col space-y-4 px-6 py-4">
                        <li>
                            <Link to="/" className="font-bold text-[#2C3E50] hover:text-[#F39C12]">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className="font-bold text-[#2C3E50] hover:text-[#F39C12]">About Us</Link>
                        </li>
                        <li>
                            <Link to="/courses" className="font-bold text-[#2C3E50] hover:text-[#F39C12]">Courses We Provide</Link>
                        </li>
                        <li>
                            <Link to="/infrastructure" className="font-bold text-[#2C3E50] hover:text-[#F39C12]">Infrastructure</Link>
                        </li>
                        <li>
                            <Link to="/placement" className="font-bold text-[#2C3E50] hover:text-[#F39C12]">Placement</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="font-bold text-[#2C3E50] hover:text-[#F39C12]">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default BottomHeader;
