import React from "react";

function Infrastructure() {
  return (
    <div className="bg-gray-50 text-gray-900">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 text-white py-16 px-6">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">Explore Our World-Class Infrastructure</h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-6 max-w-3xl mx-auto">
            From cutting-edge classrooms to state-of-the-art laboratories, our infrastructure provides everything you need for success.
          </p>
          <a href="#facilities" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg transition duration-300">
            Discover Our Facilities
          </a>
        </div>
      </section>

      {/* Infrastructure Features Section */}
      <section id="facilities" className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-8">State-of-the-Art Facilities</h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-12">
            Our campus boasts modern facilities that inspire creativity, foster collaboration, and support your learning journey.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Facility Cards */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out">
              <img
                src="https://via.placeholder.com/600x400"
                alt="Modern Classrooms"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Modern Classrooms</h3>
                <p className="text-gray-600">
                  Fully equipped with smartboards, projectors, and comfortable seating to enhance your learning experience.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out">
              <img
                src="https://via.placeholder.com/600x400"
                alt="Library"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Extensive Library</h3>
                <p className="text-gray-600">
                  Our library offers a wide range of books, journals, and digital resources for research and learning.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out">
              <img
                src="https://via.placeholder.com/600x400"
                alt="Sports Facilities"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Sports Facilities</h3>
                <p className="text-gray-600">
                  Our campus includes modern indoor and outdoor sports facilities to keep students active and engaged.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out">
              <img
                src="https://via.placeholder.com/600x400"
                alt="Laboratories"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Well-Equipped Laboratories</h3>
                <p className="text-gray-600">
                  Our laboratories are equipped with the latest tools and technology, offering hands-on learning experiences.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out">
              <img
                src="https://via.placeholder.com/600x400"
                alt="Hostel Facilities"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Comfortable Hostel</h3>
                <p className="text-gray-600">
                  Our hostels offer comfortable, secure, and affordable accommodations with modern amenities.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out">
              <img
                src="https://via.placeholder.com/600x400"
                alt="Cafeteria"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Modern Cafeteria</h3>
                <p className="text-gray-600">
                  Our cafeteria serves a variety of healthy meals and snacks to keep students energized throughout the day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Testimonials Section */}
      <section className="py-16 bg-blue-100 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-8">What Our Students Say</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Testimonial 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-lg sm:text-xl text-gray-600 mb-4">
              "The infrastructure here is incredible. The classrooms are spacious, and the library is a great place to study. The entire campus is designed to enhance your learning experience."
            </p>
            <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
            <p className="text-sm text-gray-500">Engineering Student</p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-lg sm:text-xl text-gray-600 mb-4">
              "I love the state-of-the-art laboratories. They provide an ideal environment for students like me to explore and learn through hands-on experience."
            </p>
            <h3 className="text-xl font-semibold text-gray-800">Emily Adams</h3>
            <p className="text-sm text-gray-500">Science Student</p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-lg sm:text-xl text-gray-600 mb-4">
              "The sports facilities are fantastic! It's great to have a balance between academics and physical activity."
            </p>
            <h3 className="text-xl font-semibold text-gray-800">David Brown</h3>
            <p className="text-sm text-gray-500">Medical Student</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white text-center py-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">Join Our Community Today!</h2>
        <p className="text-lg sm:text-xl mb-6">Experience world-class infrastructure and an enriching campus life that will help you succeed.</p>
        <a
          href="/admission-form"
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-100 transition-all duration-300 ease-in-out"
        >
          Apply Now
        </a>
      </section>
    </div>
  );
}

export default Infrastructure;
