import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import LoginPopup from './LoginPopup'; // Import the popup component

const PrivateRoute = ({ children }) => {
  const [showPopup, setShowPopup] = useState(false); // State to show popup
  const isLoggedIn = localStorage.getItem('user'); // Check if user is logged in

  // Trigger the popup only when the component is mounted and the user is not logged in
  useEffect(() => {
    if (!isLoggedIn) {
      setShowPopup(true); // Only show popup once when not logged in
    }
  }, [isLoggedIn]); // Dependency on isLoggedIn to trigger effect when the value changes

  const handlePopupClose = () => {
    setShowPopup(false); // Close the popup and redirect to login
    window.location.href = '/login'; // Redirect to login page
  };

  if (!isLoggedIn) {
    // If not logged in, show the popup
    return (
      <>
        {showPopup && <LoginPopup onClose={handlePopupClose} />}
      </>
    );
  }

  // If logged in, render the children (protected route)
  return children;
};

export default PrivateRoute;
