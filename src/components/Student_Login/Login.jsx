import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../redux/authActions';
import { FaGoogle, FaSyncAlt } from 'react-icons/fa'; // Google and refresh icons

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState(''); // Store CAPTCHA value
  const [userCaptchaInput, setUserCaptchaInput] = useState(''); // Store user input for CAPTCHA
  const [error, setError] = useState('');
  const user = useSelector((state) => state.auth.user); // Get user data from Redux store

  // Check if user is already logged in
  useEffect(() => {
    if (user) {
      navigate('/dashboard'); // If already logged in, redirect to dashboard
    }
  }, [user, navigate]);

  // Function to generate CAPTCHA code
  const generateCaptcha = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captchaCode = '';
    for (let i = 0; i < 6; i++) {
      captchaCode += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setCaptcha(captchaCode); // Set the generated CAPTCHA code
  };

  useEffect(() => {
    generateCaptcha(); // Generate CAPTCHA code on component mount
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    if (userCaptchaInput !== captcha) {
      setError('Invalid CAPTCHA. Please try again.');
      return;
    }

    const userData = { email, password };
    dispatch(loginUser(userData)); // Dispatch the login action

    // Redirect to dashboard after successful login
    // Assuming that loginUser will update the user state upon success
    if (user) {
      navigate('/dashboard');
    }
  };

  // CAPTCHA refresh handler
  const handleRefreshCaptcha = () => {
    generateCaptcha(); // Regenerate the CAPTCHA code
    setUserCaptchaInput(''); // Reset user input for CAPTCHA
    setError(''); // Clear any existing error
  };

  return (
    <div className=" bg-gray-100 flex justify-center items-center p-2 md:p-8">
      <div className="bg-white shadow-md rounded-lg p-6 w-full sm:w-1/3">
        <h2 className="text-2xl text-center font-semibold mb-4">Login</h2>

        <form onSubmit={handleLogin}>
          {/* Email Input */}
          <div className="space-y-4 mb-4">
            <label htmlFor="email" className="text-xl font-medium">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-md"
              autoFocus
            />
          </div>

          {/* Password Input */}
          <div className="space-y-4 mb-4">
            <label htmlFor="password" className="text-xl font-medium">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-md"
            />
          </div>

          {/* CAPTCHA Display */}
          <div className="mb-4">
            <label htmlFor="captcha" className="text-xl font-medium">Enter CAPTCHA</label>
            <div className="flex items-center space-x-2 mt-2">
              <div className="bg-gray-200 p-2 rounded-md font-semibold">{captcha}</div>
              <button
                type="button"
                onClick={handleRefreshCaptcha}
                className="ml-2 text-blue-600 hover:text-blue-700"
              >
                <FaSyncAlt className="inline-block text-lg" /> Refresh
              </button>
            </div>
          </div>

          {/* User CAPTCHA Input */}
          <div className="mb-4">
            <input
              type="text"
              id="userCaptcha"
              value={userCaptchaInput}
              onChange={(e) => setUserCaptchaInput(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-md"
              placeholder="Enter CAPTCHA"
            />
          </div>

          {/* Error Message for CAPTCHA */}
          {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

          {/* Login Button */}
          <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
            Login
          </button>
        </form>

        {/* Google Login Button */}
        {/* <div className="flex items-center justify-center mt-4">
          <button className="justify-center text-center flex items-center space-x-2 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 w-full">
            <FaGoogle className="text-xl text-center" />
            <span className='text-center'>Login with Google</span>
          </button>
        </div> */}

        {/* Create Account Button */}
        <div className="mt-4 text-center">
          <span>Don't have an account? </span>
          <button
            onClick={() => navigate('/signup')} // Navigate to the signup page
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
