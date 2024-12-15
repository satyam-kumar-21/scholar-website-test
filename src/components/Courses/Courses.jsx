import React from 'react';

const Courses = () => {
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
        description: "A 2-year course providing training in medical laboratory sciences.",
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
        title: "BBA (Bachelor of Business Administration)",
        description: "A 3-year undergraduate program in business management.",
        eligibility: ["12th Grade with passing marks in any discipline."]
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
        title: "Hotel Management",
        description: "A 3-year program in hotel and hospitality management, available through scholarship.",
        eligibility: ["12th Grade with passing marks in any discipline."]
      }
    ]
  };

  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Medical Courses Section */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">
            Medical Courses Directly Provided By Our College
          </h2>
          <div>
            {courses.medical.map((course, index) => (
              <div key={index} className="bg-white p-6 shadow-sm mb-6 rounded-md">
                <h3 className="text-xl font-bold text-blue-700">{course.title}</h3>
                <p className="text-gray-700">{course.description}</p>
                <div className="mt-3">
                  <strong>Eligibility:</strong>
                  <ul className="list-disc ml-4 text-gray-600">
                    {course.eligibility.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarship Courses Section */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">
            Courses Available Through Our Scholarship Program
          </h2>
          <p className="text-lg text-gray-700 text-center mb-8">
            Explore various courses available through scholarship opportunities at top colleges with maximum discounts.
          </p>
          <div>
            {courses.scholarship.map((course, index) => (
              <div key={index} className="bg-white p-6 shadow-sm mb-6 rounded-md">
                <h3 className="text-xl font-bold text-blue-700">{course.title}</h3>
                <p className="text-gray-700">{course.description}</p>
                {course.details && <p className="text-gray-600 mt-2">{course.details}</p>}
                <div className="mt-3">
                  <strong>Eligibility:</strong>
                  <ul className="list-disc ml-4 text-gray-600">
                    {course.eligibility.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
