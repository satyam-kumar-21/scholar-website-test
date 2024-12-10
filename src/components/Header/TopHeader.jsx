import React from 'react';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';  // Importing the email and phone icons
import { Link } from 'react-router-dom';

const TopHeader = () => {
  return (
    <div className="bg-gray-800 text-white py-3">
      <div className="max-w-screen-xl mx-auto px-6 flex justify-between items-center text-center sm:text-left">

        {/* Contact Info with Icons - Hidden on mobile */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-bold">
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-white" />  {/* Email Icon */}
            <a href="mailto:info@college.com" className="underline">info@college.com</a>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-white" />  {/* Phone Icon */}
            <a href="tel:+123456789" className="underline">+1 234 567 89</a>
          </div>
        </div>

        {/* Right Side Links (Apply For Scholarship, Admission Inquiry, Student Login) */}
        <div className="flex items-center space-x-6 text-sm font-bold sm:text-base">
          {/* Career Link */}
          <Link
            to="apply-scholar-program"
            className="text-white hover:text-gray-300 transition-all duration-300 py-1 px-3 rounded-full bg-gradient-to-r from-red-500 to-yellow-500 animate-pulse"
          >
            Apply For Scholarship
          </Link>

          {/* Admission Inquiry Link */}
          <Link
            to="admission-inquiry"
            className="text-white hover:text-gray-300 transition-all duration-300 py-1 px-3 rounded-full bg-gradient-to-r from-red-500 to-yellow-500 animate-pulse"
          >
            Admission Inquiry
          </Link>

          {/* Student Login Link */}
          <Link
            to="login"
            className="text-white hover:text-gray-300 transition-all duration-300 py-1 px-3 rounded-full bg-gradient-to-r from-red-500 to-yellow-500 animate-pulse"
          >
            Student Login
          </Link>
        </div>

        {/* No Hamburger Menu for Mobile */}
        {/* Mobile Navigation - Hamburger Menu is now removed */}
      </div>
    </div>
  );
};

export default TopHeader;
