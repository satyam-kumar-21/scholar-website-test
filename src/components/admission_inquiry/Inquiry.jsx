import React, { useState } from 'react';

function Inquiry() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., API call)
    alert('Your inquiry has been submitted');
  };

  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Header Section */}
      <header className="bg-blue-600 text-white py-8 text-center">
        <h1 className="text-3xl font-bold">Admission Inquiry</h1>
        <p className="mt-4 text-lg">Explore our courses and programs in Medical, Engineering, Law, and more.</p>
      </header>

      {/* Introduction Section */}
      <section className="py-12 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Welcome to Our Admission Inquiry Portal</h2>
          <p className="text-lg mb-6">
            We offer a wide variety of courses in the fields of Medical, Engineering, and Law. Explore more details about our programs below.
          </p>
          <p className="text-lg">
            <a href="https://www.examplecollege.com" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
              Click here to explore more about our college.
            </a>
          </p>
        </div>
      </section>

      {/* Medical Field Section */}
      <section className="bg-white py-12 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-4">Medical Programs</h2>
          <p className="text-lg mb-4">
            We offer a range of programs in the Medical field to help you build a successful career in healthcare.
          </p>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">1. BSc Nursing</h3>
            <p className="text-base mb-2">
              A 3-year undergraduate program that prepares students for nursing careers in hospitals and healthcare facilities.
            </p>
            <h4 className="text-sm font-medium mb-1">Eligibility:</h4>
            <ul className="list-disc pl-6 mb-4">
              <li>12th Grade with at least 50% marks in PCB (Physics, Chemistry, Biology).</li>
              <li>Entrance Exam or Merit-based selection.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">2. BSc Pharmacy</h3>
            <p className="text-base mb-2">
              A 4-year undergraduate program that provides students with knowledge in pharmaceutical sciences.
            </p>
            <h4 className="text-sm font-medium mb-1">Eligibility:</h4>
            <ul className="list-disc pl-6 mb-4">
              <li>12th Grade with at least 50% marks in PCB (Physics, Chemistry, Biology).</li>
              <li>Entrance Exam or Merit-based selection.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">3. MBBS (Bachelor of Medicine, Bachelor of Surgery)</h3>
            <p className="text-base mb-2">
              A 5-year undergraduate program that prepares students for careers as doctors.
            </p>
            <h4 className="text-sm font-medium mb-1">Eligibility:</h4>
            <ul className="list-disc pl-6 mb-4">
              <li>12th Grade with at least 50% marks in PCB (Physics, Chemistry, Biology).</li>
              <li>NEET Entrance Exam Score.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">4. MBA in Healthcare Management</h3>
            <p className="text-base mb-2">
              A 2-year postgraduate program focused on management skills in the healthcare industry.
            </p>
            <h4 className="text-sm font-medium mb-1">Eligibility:</h4>
            <ul className="list-disc pl-6 mb-4">
              <li>Bachelor's degree in any field with at least 50% marks.</li>
              <li>Entrance Exam (e.g., CAT, MAT) or Merit-based selection.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Engineering Field Section */}
      <section className="bg-gray-50 py-12 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-4">Engineering Programs</h2>
          <p className="text-lg mb-4">
            Our Engineering programs prepare students for successful careers in the field of technology and innovation.
          </p>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">1. B.Tech (Bachelor of Technology)</h3>
            <p className="text-base mb-2">
              A 4-year undergraduate program designed for students aspiring to become engineers in various disciplines like Computer Science, Mechanical, Civil, and Electrical Engineering.
            </p>
            <h4 className="text-sm font-medium mb-1">Eligibility:</h4>
            <ul className="list-disc pl-6 mb-4">
              <li>12th Grade with at least 50% marks in PCM (Physics, Chemistry, Mathematics).</li>
              <li>JEE Main or other institutional entrance exams.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">2. Diploma in Engineering</h3>
            <p className="text-base mb-2">
              A 3-year program designed for students who want to gain a technical qualification and start working in the engineering field quickly.
            </p>
            <h4 className="text-sm font-medium mb-1">Eligibility:</h4>
            <ul className="list-disc pl-6 mb-4">
              <li>10th Grade or equivalent with at least 35% marks.</li>
              <li>No entrance exam required (but can vary by institution).</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">3. M.Tech (Master of Technology)</h3>
            <p className="text-base mb-2">
              A 2-year postgraduate program designed for students who have completed their B.Tech and wish to specialize in a particular engineering field.
            </p>
            <h4 className="text-sm font-medium mb-1">Eligibility:</h4>
            <ul className="list-disc pl-6 mb-4">
              <li>B.Tech in a relevant engineering field with at least 60% marks.</li>
              <li>GATE or other relevant entrance exams may be required.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Law Field Section */}
      <section className="bg-white py-12 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-4">Law Programs</h2>
          <p className="text-lg mb-4">
            Our Law programs are designed to prepare students for a successful career in legal practices.
          </p>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">1. LLB (Bachelor of Laws)</h3>
            <p className="text-base mb-2">
              A 3-year program offering legal education that prepares students to become advocates and legal experts.
            </p>
            <h4 className="text-sm font-medium mb-1">Eligibility:</h4>
            <ul className="list-disc pl-6 mb-4">
              <li>Bachelor's degree (any discipline) with at least 50% marks.</li>
              <li>Entrance Exam (e.g., CLAT, LSAT).</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">2. BA LLB (Integrated 5-year Program)</h3>
            <p className="text-base mb-2">
              A 5-year undergraduate program combining law with a Bachelor of Arts degree.
            </p>
            <h4 className="text-sm font-medium mb-1">Eligibility:</h4>
            <ul className="list-disc pl-6 mb-4">
              <li>12th Grade or equivalent with at least 50% marks.</li>
              <li>Entrance Exam (e.g., CLAT, AILET).</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">3. LLM (Master of Laws)</h3>
            <p className="text-base mb-2">
              A 1-2 year postgraduate program for students who have completed LLB and want to specialize in various areas of law.
            </p>
            <h4 className="text-sm font-medium mb-1">Eligibility:</h4>
            <ul className="list-disc pl-6 mb-4">
              <li>LLB or equivalent degree with at least 50% marks.</li>
              <li>Entrance Exam (if applicable, e.g., AILET, CLAT PG).</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="bg-gray-50 py-12 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-6">Submit Your Inquiry</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium">Full Name</label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Enter your message or questions"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Inquiry;
