import React from 'react';
import { Link } from 'react-router-dom';

function Placement() {


    
const successStories = [
    {
      name: "John Doe",
      program: "B.Tech Computer Science",
      company: "Google",
      image: "https://randomuser.me/api/portraits/men/10.jpg",
      quote: "I am extremely grateful for the scholarship program that allowed me to pursue my dreams at the best university. Thanks to the amazing support from the placement cell, I landed a job at Google within months of graduation!",
    },
    {
      name: "Samantha Sharma",
      program: "MBA",
      company: "Amazon",
      image: "https://randomuser.me/api/portraits/women/9.jpg",
      quote: "The placement assistance I received here was beyond what I could have imagined. Not only did I get placed at Amazon, but I also received a substantial signing bonus.",
    },
    {
      name: "Rahul Kumar",
      program: "B.Tech Mechanical Engineering",
      company: "Tesla",
      image: "https://randomuser.me/api/portraits/men/12.jpg",
      quote: "Thanks to the internship opportunities and real-world training I got through the scholarship program, I was hired by Tesla directly from my internship!",
    },
    {
      name: "Aishwarya Patel",
      program: "BBA",
      company: "Deloitte",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      quote: "The career guidance and placement services helped me secure a role at Deloitte. I'm proud of how far I've come, all thanks to this wonderful institution.",
    },
    {
        name: "Aishwarya Patel",
        program: "BBA",
        company: "Deloitte",
        image: "https://randomuser.me/api/portraits/women/5.jpg",
        quote: "The career guidance and placement services helped me secure a role at Deloitte. I'm proud of how far I've come, all thanks to this wonderful institution.",
      },
      {
        name: "Aishwarya Patel",
        program: "BBA",
        company: "Deloitte",
        image: "https://randomuser.me/api/portraits/women/5.jpg",
        quote: "The career guidance and placement services helped me secure a role at Deloitte. I'm proud of how far I've come, all thanks to this wonderful institution.",
      },
     
  ];
  // Function to scroll to the scholarship form section
  const scrollToScholarshipForm = () => {
    const scholarshipForm = document.getElementById('scholarship-form');
    scholarshipForm.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 text-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold mb-4">Your Dream Career Starts Here</h1>
          <p className="text-lg mb-8">With our world-class placements, career guidance, and scholarship programs, your future is in safe hands.</p>
          <button
            
            className="bg-yellow-500 text-gray-800 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition"
          >
            <Link to="/apply-scholar-program">Apply for Scholarship Now!</Link>
          </button>
        </div>
      </section>

      {/* Key Stats Section */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Placement Success at a Glance</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600">95% Placement Rate</h3>
              <p className="text-gray-600 mt-2">Our graduates are highly sought after, with a high placement success rate.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600">Top Companies</h3>
              <p className="text-gray-600 mt-2">Our students are recruited by leading companies such as Google, Amazon, and Microsoft.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600">Average Salary</h3>
              <p className="text-gray-600 mt-2">Our students earn an average starting salary of ₹8 LPA, with many surpassing this amount.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Internship and Job Opportunities Section */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Internships & Job Opportunities</h2>
          <p className="text-lg text-gray-700 mb-6">We offer internship opportunities with top industry leaders, as well as job placement assistance throughout your education journey.</p>
          <div className="flex justify-center space-x-8">
            <div className="bg-white p-6 rounded-lg shadow-md w-64">
              <h3 className="text-xl font-semibold text-indigo-700">Internship Programs</h3>
              <p className="text-gray-600 mt-2">Gain hands-on experience with prestigious companies during your studies.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md w-64">
              <h3 className="text-xl font-semibold text-indigo-700">Job Assistance</h3>
              <p className="text-gray-600 mt-2">Our career support team helps you secure job offers from the best companies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Success Stories</h2>
          <p className="text-lg text-gray-700 mb-8">Our students' success is our success! Hear from our alumni who have experienced tremendous growth through our programs and placements.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {successStories.map((story, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-indigo-700">{story.name}</h3>
                    <p className="text-gray-600">{story.program}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic mb-4">"{story.quote}"</p>
                <p className="text-lg font-medium text-indigo-600">Placed at {story.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action for Scholarship */}
      <section id="scholarship-form" className="bg-gradient-to-r from-purple-600 via-indigo-700 to-blue-600 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-6">Get Your Scholarship Today</h2>
          <p className="text-lg mb-6">Apply now to secure your scholarship and start your journey toward a successful career!</p>
          <button
            
            className="bg-yellow-500 text-gray-800 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition"
          >
            <Link to="/apply-scholar-program">Apply Now</Link>
          </button>
        </div>
      </section>
    </div>
  );
}

export default Placement;
