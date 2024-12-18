import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'; // Importing icons for call and WhatsApp
import Testimonials from './Testimonials';
import { useSelector } from 'react-redux';

function ScholarProgram() {

  const scholar = useSelector(state => state.auth.user.scholarFormId)
  console.log(scholar);
  
  const successStories = [
    {
      name: "Ravi Kumar",
      major: "Computer Science",
      graduationYear: 2024,
      story: "The Scholar Program helped me gain a comprehensive understanding of the tech industry and land an internship with top firms. It was a game-changer for me!",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "Priya Sharma",
      major: "Business Administration",
      graduationYear: 2025,
      story: "Thanks to the mentorship and support from the Scholar Program, I secured a job at a leading multinational company even before graduation.",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "Arjun Patel",
      major: "Engineering",
      graduationYear: 2023,
      story: "The scholarship allowed me to focus entirely on my studies without worrying about finances. I'm now pursuing my master's degree at a top university abroad.",
      image: "https://via.placeholder.com/150"
    }
  ];

  return (
    <div className="font-sans bg-white text-gray-900 ">
      <div className="">


        <section className="py-20 px-4 md:px-16 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
            Your Path to Success Starts Here
          </h1>
          <p className="mt-4 pb-10 text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto">
            Apply for the Scholar Program today and take the first step towards an incredible academic journey, complete with financial support and career opportunities.
          </p>
           {/* Conditional rendering of Apply Now or Message based on scholar value */}
           {scholar ? (
            <p className="text-lg sm:text-xl text-gray-200 mb-6">
              You have already filled out the form. Visit your <Link to="/dashboard" className="text-yellow-500">Dashboard</Link> to check your status.
            </p>
          ) : (
            <Link to="/apply-scholar-program" className="bg-yellow-500 text-gray-800 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition">
              Apply Now
            </Link>
          )}
        
        </section>

        {/* Who Can Apply Section */}
        <section className="bg-gray-100 py-12 sm:py-16 mb-12">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-lg sm:text-3xl font-extrabold text-indigo-600 mb-4">
              Who Can Apply for the Scholar Program?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Our Scholar Program is designed to support students who meet the following eligibility criteria:
            </p>
          </div>

          {/* Eligibility Cards Section */}
          <div className="flex flex-wrap justify-center gap-8">
            <div className="max-w-xs w-full bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
              <div className="flex justify-center mb-4">
                <div className="bg-indigo-500 text-white p-4 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M6 2a1 1 0 011 1v3a1 1 0 01-2 0V3a1 1 0 011-1zm8 0a1 1 0 011 1v3a1 1 0 01-2 0V3a1 1 0 011-1zM4 9a1 1 0 011 1v6a1 1 0 01-2 0V10a1 1 0 011-1zm12 0a1 1 0 011 1v6a1 1 0 01-2 0V10a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-indigo-600 mb-4">Indian Citizens</h3>
              <p className="text-lg text-gray-600">
                Only Indian citizens who are pursuing their undergraduate or postgraduate degrees are eligible to apply.
              </p>
            </div>

            <div className="max-w-xs w-full bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-500 text-white p-4 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M3 2a1 1 0 011-1h12a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-indigo-600 mb-4">Aspire for Higher Education</h3>
              <p className="text-lg text-gray-600">
                Applicants should have completed their schooling or undergraduate education and aspire to pursue higher education.
              </p>
            </div>

            <div className="max-w-xs w-full bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
              <div className="flex justify-center mb-4">
                <div className="bg-green-500 text-white p-4 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M2.29 3.71a1 1 0 011.42 0l5.88 5.88 1.17-1.17a1 1 0 111.42 1.42l-2.29 2.29a1 1 0 01-1.42 0l-5.88-5.88-1.17 1.17a1 1 0 11-1.42-1.42l2.29-2.29a1 1 0 01.02-.02z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-indigo-600 mb-4">Financially Underprivileged Background</h3>
              <p className="text-lg text-gray-600">
                Students from families with limited financial resources who wish to continue their education are encouraged to apply.
              </p>
            </div>
          </div>
        </section>



        {/* What We Offer Section */}
        <section className="py-20 px-4 md:px-16 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-6">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-indigo-600 mb-4">Full Tuition Coverage</h3>
              <p className="text-gray-600">
                Receive full or partial funding for your tuition fees, helping you focus on what matters most – your education.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-indigo-600 mb-4">Mentorship & Guidance</h3>
              <p className="text-gray-600">
                Get personalized mentorship from professors and industry experts, guiding you to success in your chosen career path.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-indigo-600 mb-4">Career Development</h3>
              <p className="text-gray-600">
                Take advantage of internships, job placement programs, and networking opportunities to fast-track your career.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-gray-100 py-10 sm:py-12">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-indigo-600 mb-6">
              How the Program Works
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              The application process is simple. Follow these steps to apply for our Scholar Program:
            </p>
          </div>
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-center justify-center text-lg sm:text-xl text-gray-600">
              <span className="font-semibold text-indigo-600 mr-4">Step 1:</span> Complete the online application form.
            </div>
            <div className="flex items-center justify-center text-lg sm:text-xl text-gray-600">
              <span className="font-semibold text-indigo-600 mr-4">Step 2:</span> Submit your academic documents and personal statement.
            </div>
            <div className="flex items-center justify-center text-lg sm:text-xl text-gray-600">
              <span className="font-semibold text-indigo-600 mr-4">Step 3:</span> Choose the courses you wish to apply for.
            </div>
            <div className="flex items-center justify-center text-lg sm:text-xl text-gray-600">
              <span className="font-semibold text-indigo-600 mr-4">Step 4:</span> Complete an online assessment.
            </div>
            <div className="flex items-center justify-center text-lg sm:text-xl text-gray-600">
              <span className="font-semibold text-indigo-600 mr-4">Step 5:</span> Receive your scholarship offer and begin your journey!
            </div>
          </div>
        </section>


        <Testimonials />



        {/* Core Values Section */}
        <section className="bg-gray-100 py-10 sm:py-12 md:py-16 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-center text-white">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold  mb-6">
              Our Core Values
            </h2>
            <p className="text-lg sm:text-xl  max-w-3xl mx-auto mb-6">
              At the heart of our Scholar Program are values that guide every student’s journey to success.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-5 md:mx-10 gap-6 sm:gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-indigo-600 mb-4">Empowerment</h3>
              <p className="text-lg text-gray-600">
                We empower students by providing the necessary resources, opportunities, and guidance to help them succeed.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-indigo-600 mb-4">Integrity</h3>
              <p className="text-lg text-gray-600">
                Our program is built on trust, transparency, and honesty, ensuring that every student is treated with the utmost respect.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-indigo-600 mb-4">Excellence</h3>
              <p className="text-lg text-gray-600">
                We uphold the highest standards in everything we do—from education to student support, aiming for excellence in all aspects.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">
            Want to Know More?
          </h2>
          <div className="flex justify-center gap-6 sm:gap-8">
            {/* Call Us Button */}
            <a href="tel:+916203176139" className="flex items-center bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 transition transform duration-200">
              <FaPhoneAlt className="mr-3" /> Call Us
            </a>

            {/* WhatsApp Us Button */}
            <a href="https://wa.me/916203176139" target="_blank" rel="noopener noreferrer" className="flex items-center bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 transition transform duration-200">
              <FaWhatsapp className="mr-3" /> WhatsApp Us
            </a>
          </div>
        </section>

        {/* Final Call to Action */}

      </div>
    </div>
  );
}

export default ScholarProgram;
