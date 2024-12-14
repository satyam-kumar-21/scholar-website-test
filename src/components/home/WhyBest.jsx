import React from 'react';

function WhyBest() {
  return (
    <div className="py-20 px-4 md:px-16 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-10">
          Why Choose JSR Group of Institution?
        </h2>

        <p className="text-lg sm:text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto">
          Discover what sets us apart! JSR Group of Institution combines cutting-edge education, world-class faculty, and a dynamic campus experience to empower you to succeed in your field.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          <div className="bg-white shadow-xl rounded-2xl p-8 transform transition-all hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-semibold text-indigo-600 mb-4">
              World-Class Education
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              Our curriculum is built to keep you ahead in your career. We provide cutting-edge programs with practical applications for the healthcare field, giving you a competitive edge.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-2xl p-8 transform transition-all hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-semibold text-indigo-600 mb-4">
              Experienced Faculty
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              Learn from experts in the medical and healthcare industry. Our faculty brings years of experience and deep knowledge to the classroom, ensuring you get the best education.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-2xl p-8 transform transition-all hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-semibold text-indigo-600 mb-4">
              State-of-the-Art Infrastructure
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              Our campus is equipped with modern facilities, including advanced classrooms, labs, and resources that ensure you have access to the latest technologies in healthcare education.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyBest;
