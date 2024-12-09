import React from 'react';
import { Link } from 'react-router-dom';

function WhoWeAre() {
  return (
    <div className="bg-gray-50 py-0 sm:py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-0 sm:px-6 md:px-12">

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-4 sm:mb-8">
          Who We Are
        </h2>

        {/* Section Content: Two Column Layout for Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 md:gap-24">

          {/* Image Section (Left Column for Larger Screens, Top on Mobile) */}
          <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[80vh]">
            <img
              src="https://media.istockphoto.com/id/1392016982/photo/mixed-group-of-business-people-sitting-around-a-table-and-talking.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZWDD9TinKVcgKsQo7Lrn0fR5NkVI-HiBobM5ktxSFYc="
              alt="Our Team"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section (Right Column for Larger Screens, Bottom on Mobile) */}
          <div className="flex flex-col justify-center px-4 sm:px-6">
            <p className="text-lg text-gray-600 mb-4 sm:mb-6">
              We are a group of dedicated professionals working together to foster a better educational environment. Our commitment lies in providing opportunities for personal and professional growth through our unique scholarship programs and academic support. We believe in empowering students to achieve their dreams and excel in their academic journey.
            </p>

            {/* Core Values */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                Our Core Values
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-indigo-600 font-semibold mr-2">•</span> Empowerment - We aim to empower students to reach their fullest potential through accessible education and resources.
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 font-semibold mr-2">•</span> Integrity - We uphold transparency and honesty in all our interactions with students, staff, and partners.
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 font-semibold mr-2">•</span> Excellence - We strive to maintain the highest standards of academic excellence, support, and innovation.
                </li>
              </ul>
            </div>

            {/* Call to Action Button */}
            <div className="mt-6 sm:mt-8 text-center">
              <button className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg text-lg shadow-md hover:scale-105 transition duration-200">
                <Link to="/about">Learn More About Us</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
