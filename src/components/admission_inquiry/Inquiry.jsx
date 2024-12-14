import React, { useState } from 'react';

function Inquiry() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('medical');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., API call)
    alert('Your inquiry has been submitted');
  };

  const courses = {
    medical: [
      {
        title: "BSc Nursing",
        description: "A 3-year undergraduate program that prepares students for nursing careers.",
        eligibility: ["12th Grade with passing marks in PCB (Physics, Chemistry, Biology)."]
      },
      {
        title: "Pharmacy (B. Pharm)",
        description: "A 4-year undergraduate program focusing on pharmaceutical sciences.",
        eligibility: ["12th Grade with passing marks in PCB (Physics, Chemistry, Biology)."]
      },
      {
        title: "D. Pharma (Diploma in Pharmacy)",
        description: "A 2-year diploma program in pharmaceutical sciences.",
        eligibility: ["12th Grade with passing marks in PCB."]
      },
      {
        title: "B&D MLT (Medical Laboratory Technology)",
        description: "A 2-year course that provides training in medical laboratory sciences.",
        eligibility: ["12th Grade with passing marks in PCB."]
      }
    ],
    scholarship: [
      {
        title: "B.Tech (Engineering)",
        description: "A 4-year undergraduate program in various engineering disciplines, available through scholarship.",
        eligibility: ["12th Grade with passing marks in PCM (Physics, Chemistry, Mathematics)."],
        details: "Available in all branches of Engineering such as Mechanical, Civil, Electrical, Computer Science, and more."
      },
      {
        title: "Diploma in Engineering",
        description: "A 3-year diploma program in various engineering fields, available through scholarship.",
        eligibility: ["10th Grade with passing marks."],
        details: "Available in all branches such as Mechanical, Civil, Electrical, and more."
      },
      {
        title: "MBBS (Bachelor of Medicine, Bachelor of Surgery)",
        description: "A 5.5-year undergraduate medical program available through scholarship.",
        eligibility: ["12th Grade with passing marks in PCB (Physics, Chemistry, Biology)."]
      },
      {
        title: "BDS (Bachelor of Dental Surgery)",
        description: "A 5-year undergraduate dental program available through scholarship.",
        eligibility: ["12th Grade with passing marks in PCB."]
      },
      {
        title: "MBA (Master of Business Administration)",
        description: "A 2-year postgraduate program in business management, available through scholarship.",
        eligibility: ["Bachelor's degree with passing marks in any discipline."]
      },
      {
        title: "LLB (Bachelor of Laws)",
        description: "A 3-year law degree program, available through scholarship.",
        eligibility: ["Bachelor's degree with passing marks in any discipline."]
      },

      {
        title: "BSc Nursing",
        description: "A 3-year undergraduate program that prepares students for nursing careers.",
        eligibility: ["12th Grade with passing marks in PCB (Physics, Chemistry, Biology)."]
      },
      {
        title: "Pharmacy (B. Pharm)",
        description: "A 4-year undergraduate program focusing on pharmaceutical sciences.",
        eligibility: ["12th Grade with passing marks in PCB (Physics, Chemistry, Biology)."]
      },
      {
        title: "D. Pharma (Diploma in Pharmacy)",
        description: "A 2-year diploma program in pharmaceutical sciences.",
        eligibility: ["12th Grade with passing marks in PCB."]
      },
      {
        title: "B&D MLT (Medical Laboratory Technology)",
        description: "A 2-year course that provides training in medical laboratory sciences.",
        eligibility: ["12th Grade with passing marks in PCB."]
      }
    ]
  };

  // Show different course details based on the selected department
  const displayScholarshipInfo = selectedDepartment === 'other';

  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 text-white md:py-12 py-5 text-center">
        <h1 className="text-4xl font-extrabold">Admission Inquiry</h1>
        <p className="mt-4 text-xl">Explore our courses in Nursing, Pharmacy, MLT, and other programs available through our Scholarship Program.</p>
      </header>

      {/* Introduction Section */}
      <section className="md:py-16 py-3 px-2 md:px-6  bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-3 md:mb-4">Welcome to Our Admission Inquiry Portal</h2>
          <p className="text-lg text-gray-700 mb-6">
            We offer specialized programs in Nursing, Pharmacy, MLT and many other courses through our Scholarship Program.
          </p>
        </div>
      </section>

      {/* Course Selection */}
      <section className="bg-white md:py-4 py-2 md:px-6 px-3">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6 md:mb-6">Choose Your Department</h2>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setSelectedDepartment('medical')}
              className="bg-blue-500 text-white md:px-6 px-3 md:py-3 py-2 rounded-lg"
            >
              Medical Courses
            </button>
            <button
              onClick={() => setSelectedDepartment('other')}
              className="bg-purple-500 text-white md:px-6 px-2 md:py-3 py-2 rounded-lg"
            >
              Other Programs (Scholarship)
            </button>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="bg-white md:py-12 py-3 md:px-6 px-2">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">
            {displayScholarshipInfo ? 'Courses Available Through Scholarship Program' : 'Our Courses in Nursing, Pharmacy, and MLT'}
          </h2>

          {displayScholarshipInfo ? (
            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-4">
                Available Programs Through Our Scholarship Program:
              </h3>
              <p className="text-lg text-gray-700 mb-8 text-center">
                Explore various courses like Engineering, Law, Medical, and Management, all available with scholarship opportunities.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {courses.scholarship.map((program, index) => (
                  <div key={index} className="bg-gray-50 shadow-lg rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-blue-700">{program.title}</h3>
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    {program.details && <p className="text-gray-700 mb-4 font-medium">{program.details}</p>}
                    <h4 className="text-lg font-medium text-gray-800">Eligibility:</h4>
                    <ul className="list-disc pl-6 text-gray-700">
                      {program.eligibility.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courses.medical.map((program, index) => (
                <div key={index} className="bg-gray-50 shadow-lg rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-blue-700">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <h4 className="text-lg font-medium text-gray-800">Eligibility:</h4>
                  <ul className="list-disc pl-6 text-gray-700">
                    {program.eligibility.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 py-12 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto text-white">
          <h2 className="text-2xl font-semibold text-center mb-6">Submit Your Inquiry</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium">Full Name</label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your message"
                required
              />
            </div>

            <div className="text-center">
              <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg">
                Submit Inquiry
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Inquiry;
