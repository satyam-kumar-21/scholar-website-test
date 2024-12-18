// src/components/Signup/Signup.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signupStart, signupSuccess, registerFailure } from '../../redux/authSlice'; // Corrected import path

function Signup() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error } = useSelector((state) => state.auth);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!fullName || !email || !mobile || !password || !confirmPassword) {
      setErrorMessage('All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    try {
      dispatch(signupStart());

      const apicheck  = 'http://localhost:5000/api/auth/register' //local

      // const apicheck = 'https://scholarship-backend-orpin.vercel.app/api/auth/register'
      // Replace this with the actual API call
      const response = await fetch(apicheck , {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: fullName, email, mobile, password }),
      });

      const data = await response.json();

      if (response.ok) {
        dispatch(signupSuccess(data));
        alert('Signup Successful');
        navigate('/login'); // Redirect to login page after successful signup
      } else {
        dispatch(registerFailure(data.message));
        setErrorMessage(data.message);
      }
    } catch (err) {
      dispatch(registerFailure('Server error, please try again.'));
      setErrorMessage('Server error, please try again.');
    }
  };

  return (
    <div className="bg-gray-100 flex justify-center items-center p-2 md:p-8">
      <div className="bg-white shadow-md rounded-lg p-6 w-full sm:w-1/3">
        <h2 className="text-2xl text-center font-semibold mb-4">Create Account</h2>

        {/* Error Message */}
        {errorMessage && <p className="text-red-500 text-center mb-4">{errorMessage}</p>}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} >
          <div className='space-y-4 mb-4'>
            <label htmlFor="fullName" className="text-xl font-medium">Full Name</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-md"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="space-y-4 mb-4">
            <label htmlFor="email" className="text-xl font-medium">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-md"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="space-y-4 mb-4">
            <label htmlFor="mobile" className="text-xl font-medium">Mobile</label>
            <input
              type="text"
              id="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-md"
              placeholder="Enter your mobile number"
              required
            />
          </div>

          <div className="space-y-4 mb-4">
            <label htmlFor="password" className="text-xl font-medium">Create Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-md"
              placeholder="Create a password"
              required
            />
          </div>

          <div className="space-y-4 mb-4">
            <label htmlFor="confirmPassword" className="text-xl font-medium">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-md"
              placeholder="Confirm your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Already have an account? 
            <Link to="/login" className="text-blue-600 hover:text-blue-700 font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
