import React from 'react';
import { Link } from 'react-router-dom';

function StudentLife() {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-center text-4xl font-extrabold mb-8 text-blue-900">Life on Campus</h2>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Student Clubs */}
          <div className="relative group">
            <img
              src="https://via.placeholder.com/600x400?text=Student+Clubs"
              alt="Student Clubs"
              className="w-full h-64 object-cover rounded-lg shadow-md transition-all duration-300 group-hover:opacity-80"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex justify-center items-center">
              <Link
                to="/student-clubs"
                className="text-white text-xl font-semibold px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition-all duration-300"
              >
                Join a Club
              </Link>
            </div>
            <h3 className="absolute bottom-6 left-6 text-2xl font-semibold text-white">
              Student Clubs
            </h3>
          </div>

          {/* Campus Events */}
          <div className="relative group">
            <img
              src="https://via.placeholder.com/600x400?text=Campus+Events"
              alt="Campus Events"
              className="w-full h-64 object-cover rounded-lg shadow-md transition-all duration-300 group-hover:opacity-80"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex justify-center items-center">
              <Link
                to="/events"
                className="text-white text-xl font-semibold px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition-all duration-300"
              >
                See Events
              </Link>
            </div>
            <h3 className="absolute bottom-6 left-6 text-2xl font-semibold text-white">
              Campus Events
            </h3>
          </div>

          {/* Student Activities */}
          <div className="relative group">
            <img
              src="https://via.placeholder.com/600x400?text=Student+Activities"
              alt="Student Activities"
              className="w-full h-64 object-cover rounded-lg shadow-md transition-all duration-300 group-hover:opacity-80"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex justify-center items-center">
              <Link
                to="/student-activities"
                className="text-white text-xl font-semibold px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition-all duration-300"
              >
                Get Involved
              </Link>
            </div>
            <h3 className="absolute bottom-6 left-6 text-2xl font-semibold text-white">
              Student Activities
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StudentLife;
