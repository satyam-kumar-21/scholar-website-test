import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl sm:text-8xl font-extrabold text-gray-800">404</h1>
        <p className="text-lg sm:text-2xl text-gray-600 mt-4">Work in Progress!</p>
        <p className="text-sm text-gray-500 mt-2">Oops! The page you're looking for is currently under construction. Please wait, we'll be ready soon!</p>
        
        <div className="mt-6">
          <Link
            to="/"
            className="inline-block bg-gradient-to-r from-indigo-500 to-blue-600 text-white text-lg px-6 py-3 rounded-lg shadow-md hover:scale-105 transition duration-200"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
