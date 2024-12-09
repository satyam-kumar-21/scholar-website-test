import React, { useState, useEffect } from 'react';

function Popup() {
  const [isOpen, setIsOpen] = useState(false); // Initially not open

  // Check if the popup has already been shown in the current session
  useEffect(() => {
    const hasShownPopup = sessionStorage.getItem('popupShown');
    
    // If popup has not been shown in this session, set it to open
    if (!hasShownPopup) {
      setIsOpen(true);
    }

    // Auto-close popup after 10 seconds
    const timer = setTimeout(() => {
      closePopup();
    }, 10000); // Close after 10 seconds

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  // Function to close the popup
  const closePopup = () => {
    setIsOpen(false);
    // Set a flag in sessionStorage to remember that the popup has been shown
    sessionStorage.setItem('popupShown', 'true');
  };

  // Function for Apply Now button
  const applyNow = () => {
    alert('Redirecting to Apply Now!');
    closePopup(); // Close popup after Apply Now click
  };

  return (
    <>
      {/* Conditional Rendering of the Popup */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-gradient-to-tl from-indigo-700 to-purple-500 p-8 rounded-lg shadow-2xl w-11/12 sm:w-96 max-w-lg text-white">
            <h2 className="text-3xl font-extrabold mb-4 text-center">
              Join Our Community!
            </h2>
            <p className="mb-6 text-center text-lg">
              We are excited to have you with us. Click below to apply and get started with us today!
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={applyNow}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-lg shadow-md hover:scale-105 transition duration-200"
              >
                Apply Now
              </button>
              <button
                onClick={closePopup}
                className="px-6 py-3 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Popup;
