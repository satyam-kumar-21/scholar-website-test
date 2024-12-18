import React from 'react';

const LoginPopup = ({ onClose }) => {
  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <h2>You need to log in to access this page.</h2>
        <button onClick={onClose} style={buttonStyle}>
          OK
        </button>
      </div>
    </div>
  );
};

// Styles for the overlay and modal
const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const modalStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  textAlign: 'center',
  minWidth: '300px',
};

const buttonStyle = {
  marginTop: '20px',
  padding: '10px 20px',
  backgroundColor: '#007BFF',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default LoginPopup;









