import React, { useState } from 'react';

function Faculty() {
  // State to manage modal visibility and selected faculty details
  const [selectedFaculty, setSelectedFaculty] = useState(null); 
  const [isModalOpen, setIsModalOpen] = useState(false); 

  // List of faculty members
  const facultyMembers = [
    {
      name: 'Dr. Rajesh Kumar',
      title: 'Professor of General Medicine',
      image: 'https://via.placeholder.com/300x300?text=Dr.+Rajesh+Kumar',
      teachingExperience: '18 years of experience in internal medicine, specializing in cardiology and diabetes.',
      background: 'Dr. Rajesh Kumar has been a leader in the field of cardiology, helping develop numerous treatment protocols.',
      achievements: 'Published in several prestigious journals, recognized for his work in preventive medicine.'
    },
    {
      name: 'Dr. Priya Sharma',
      title: 'Professor of Anatomy',
      image: 'https://via.placeholder.com/300x300?text=Dr.+Priya+Sharma',
      teachingExperience: '12 years of teaching experience, specializing in human anatomy and cadaveric dissection.',
      background: 'Dr. Priya Sharma is a renowned expert in anatomical sciences and has contributed to educational reform in the field.',
      achievements: 'Author of the textbook "Human Anatomy Simplified", award-winning educator in medical sciences.'
    },
    {
      name: 'Dr. Arvind Gupta',
      title: 'Professor of Pharmacology',
      image: 'https://via.placeholder.com/300x300?text=Dr.+Arvind+Gupta',
      teachingExperience: '20 years in pharmacology, with special focus on drug interactions and clinical pharmacology.',
      background: 'Dr. Arvind Gupta has worked on numerous clinical trials and drug safety studies.',
      achievements: 'Awarded "Best Pharmacologist" by the Indian Medical Association, published over 50 research papers.'
    },
  ];

  // Open the modal and set the selected faculty data
  const openModal = (faculty) => {
    setSelectedFaculty(faculty);
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFaculty(null);
  };

  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-center text-4xl font-extrabold mb-8 text-blue-900">Meet Our Faculty</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
        {facultyMembers.map((faculty, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <img
              src={faculty.image}
              alt={faculty.name}
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="text-center mt-4">
              <h3 className="text-2xl font-semibold text-gray-800">{faculty.name}</h3>
              <p className="text-gray-600">{faculty.title}</p>
              <button
                onClick={() => openModal(faculty)} // Open the modal on click
                className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-semibold transition duration-300"
              >
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for displaying faculty details */}
      {isModalOpen && selectedFaculty && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
          <div
            className="bg-white rounded-lg p-8 max-w-lg w-full relative"
          >
            {/* Close button */}
            <button
              onClick={closeModal} // Close modal
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 font-bold text-xl"
            >
              &times;
            </button>
            <h3 className="text-3xl font-semibold mb-4 text-blue-900">{selectedFaculty.name}</h3>
            <p className="text-xl font-semibold mb-2 text-blue-700">{selectedFaculty.title}</p>
            <div className="flex justify-center mb-4">
              <img
                src={selectedFaculty.image}
                alt={selectedFaculty.name}
                className="w-32 h-32 object-cover rounded-full"
              />
            </div>
            <p className="text-lg mb-2"><strong>Teaching Experience:</strong> {selectedFaculty.teachingExperience}</p>
            <p className="text-lg mb-2"><strong>Background:</strong> {selectedFaculty.background}</p>
            <p className="text-lg mb-2"><strong>Achievements:</strong> {selectedFaculty.achievements}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Faculty;
