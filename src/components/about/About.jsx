import React from 'react';
import chairman from "../../assets/important/chairman.jpeg"; // Ensure the path is correct for your project

function About() {
  return (
    <div className="font-sans bg-white text-gray-900">

      {/* Hero Section */}
      <section className="py-20 px-4 md:px-16 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-center text-white">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
          About JSR Group of Institution
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto">
          Welcome to JSR Group of Institution, where we are committed to shaping future leaders in the fields of Nursing, Pharmacy, and Medical Education since 2010, located in Bhopal, M.P.
        </p>
      </section>


      {/* About Us Section */}
      <section className="md:py-16 py-3 px-2 md:px-16">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Mobile: Show image on top, text below */}
          <div className="flex justify-center items-center mb-2 md:mb-8 sm:mb-0 md:order-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJgbTVxk55iqM841yiaunwFUajCFklYGlZS3CLeO43L6GT63666gDzAz-UK8R1l4CkiKA&usqp=CAU"
              alt="College Campus"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="text-base sm:text-lg md:text-xl leading-relaxed md:order-1">
            <h2 className="text-2xl sm:text-3xl text-indigo-600 md:text-4xl font-semibold mb-4">About Our College</h2>
            <p>
              Established in 2010, JSR Group of Institution has become one of the leading institutions in India, specializing in Nursing, Pharmacy, and Medical Sciences. Our mission is to provide world-class education, foster innovation, and prepare students for impactful careers in healthcare.
            </p>
            <p className="mt-4">
              Located in Bhopal, M.P., we offer an ideal blend of theoretical knowledge and practical experience. Our diverse range of programs is backed by a highly skilled faculty and state-of-the-art facilities, ensuring our students receive the best possible education.
            </p>
            <p className="mt-4">
              At JSR Group of Institution, we focus on holistic development, combining academic learning with extracurricular activities, leadership development, and community engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Chairman's Message Section */}
      <section className="bg-gray-100 py-2 md:py-16 px-2 md:px-16">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Mobile: Reduce Chairman's Image size */}
          <div className="flex justify-center items-center mb-2 md:mb-8 sm:mb-0">
            <img
              src={chairman}
              alt="Chairman Sudhir Singh"
              className="w-full sm:w-50 md:w-80 h-auto rounded-lg shadow-xl object-cover"
              style={{ aspectRatio: '4 / 5' }} // Aspect ratio for mobile
            />
          </div>

          <div className="text-base sm:text-lg md:text-xl leading-relaxed">
            <h2 className="text-2xl text-indigo-600 sm:text-3xl md:text-4xl font-semibold mb-4">Chairman's Message</h2>
            <p>
              As the Chairman of JSR Group of Institution, it is my pleasure to welcome you to our esteemed institution. Since our establishment in 2010, we have focused on providing students with a world-class education that prepares them for leadership roles in the medical and healthcare sectors.
            </p>
            <p className="mt-4">
              Our vision is to nurture compassionate, skilled professionals who will contribute meaningfully to the healthcare industry and improve the well-being of society. Our dedicated faculty and innovative teaching methods ensure that our students are equipped with the skills necessary to thrive in an ever-evolving field.
            </p>
            <p className="mt-4 font-semibold text-indigo-700">- Sudhir Singh, Chairman</p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 px-4 md:px-16 bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 text-center text-white">
        <div className="container mx-auto">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
            Our Vision & Mission
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-12 max-w-4xl mx-auto">
            Our vision and mission drive everything we do, ensuring that we remain committed to our goal of excellence in education and the development of future healthcare leaders.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h3 className="text-2xl text-indigo-600 sm:text-3xl md:text-4xl font-semibold mb-4">Vision</h3>
              <p className="text-gray-900 text-base sm:text-lg md:text-xl leading-relaxed">
                Our vision is to be a leading institution in the fields of Nursing, Pharmacy, and Medical Education, empowering students to achieve excellence in their careers and contribute to the betterment of global healthcare.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h3 className="text-2xl text-indigo-600 sm:text-3xl md:text-4xl font-semibold mb-4">Mission</h3>
              <p className="text-gray-900 text-base sm:text-lg md:text-xl leading-relaxed">
                Our mission is to provide quality education that blends academic knowledge, practical experience, and ethical values. We strive to foster innovation, leadership, and a passion for lifelong learning in every student.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Infrastructure & Achievements Section */}
      <section className="md:py-16 py-6 px-4 md:px-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl text-indigo-700 sm:text-3xl md:text-4xl font-semibold mb-6 sm:mb-8 md:mb-12">
            Infrastructure & Achievements
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 md:mb-16">
            Our state-of-the-art facilities, dedicated faculty, and research opportunities create a conducive environment for learning. We have received numerous awards and recognition for our contributions to education, research, and student success.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
            {/* Infrastructure */}
            <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 md:p-10 hover:scale-105 transition duration-300">
              <h3 className="text-xl text-indigo-600 sm:text-2xl md:text-3xl font-semibold mb-4">Advanced Infrastructure</h3>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                Our campus is equipped with modern classrooms, laboratories, and libraries to support academic excellence. We also offer state-of-the-art simulation labs to provide hands-on training for our students.
              </p>
            </div>

            {/* Outstanding Faculty */}
            <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 md:p-10 hover:scale-105 transition duration-300">
              <h3 className="text-xl text-indigo-600 sm:text-2xl md:text-3xl font-semibold mb-4">Outstanding Faculty</h3>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                Our faculty members are experienced professionals, dedicated to providing students with the best possible education and mentorship. They bring real-world experience into the classroom and ensure a practical learning approach.
              </p>
            </div>

            {/* Recognized Excellence */}
            <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 md:p-10 hover:scale-105 transition duration-300">
              <h3 className="text-xl text-indigo-600 sm:text-2xl md:text-3xl font-semibold mb-4">Recognized Excellence</h3>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                Our college has received numerous accolades and recognition for academic achievements, research excellence, and community engagement. We are proud of our students and their accomplishments in various national and international forums.
              </p>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}

export default About;
