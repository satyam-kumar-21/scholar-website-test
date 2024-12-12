import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { Link } from 'react-router-dom'; // Import Link to handle routing
import { useDispatch } from 'react-redux'; // For Redux integration
import { loginStart, loginSuccess, loginFailure } from '../../redux/authSlice'; // Correct Redux action imports

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [captchaCode, setCaptchaCode] = useState(generateCaptcha());
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate

  // Generate a random captcha code
  function generateCaptcha() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captchaStr = '';
    for (let i = 0; i < 6; i++) {
      captchaStr += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return captchaStr;
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (captcha !== captchaCode) {
      setErrorMessage('Captcha is incorrect');
      return;
    }

    if (!email || !password) {
      setErrorMessage('Please fill in both fields');
      return;
    }

    // Dispatch the loginStart action
    dispatch(loginStart());

    try {
      // Make the API call to log the user in
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Dispatch loginSuccess with user data
        dispatch(loginSuccess(data));
        navigate('/dashboard'); // Redirect to dashboard after successful login
      } else {
        // Dispatch loginFailure in case of an error
        dispatch(loginFailure(data.message));
        setErrorMessage(data.message);
      }
    } catch (err) {
      dispatch(loginFailure('Server error, please try again.'));
      setErrorMessage('Server error, please try again.');
    }
  };

  // Handle Google Login
  const handleGoogleLogin = () => {
    // Simulate Google login
    alert('Logging in with Google...');
    navigate('/dashboard'); // Redirect after successful Google login
  };

  return (
    <div className="flex justify-center items-center px-2 py-2 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

        {/* Error Message */}
        {errorMessage && <p className="text-red-500 text-center mb-4">{errorMessage}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
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
            <label htmlFor="password" className="block text-sm font-medium">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Forgot Password Link */}
          <div className="text-sm text-blue-600 hover:underline text-right">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>

          <div>
            <label htmlFor="captcha" className="block text-sm font-medium">Captcha</label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                id="captcha"
                value={captcha}
                onChange={(e) => setCaptcha(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Enter the captcha"
                required
              />
              <span className="bg-gray-200 px-4 py-2 rounded-lg">{captchaCode}</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </form>

        <div className="flex items-center justify-center mt-4">
          <span className="text-sm text-gray-600">Or</span>
        </div>

        {/* Google Login Button */}
        <button
          onClick={handleGoogleLogin}
          className="w-full mt-4 px-4 py-2 bg-red-600 text-white rounded-lg flex items-center justify-center hover:bg-red-700 transition duration-200"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="Google logo"
            className="w-6 h-6 mr-2" // Adjust size of the logo
          />
          <span>Login with Google</span>
        </button>

        {/* Create Account Link */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Don't have an account?  
            <Link
              to="/create-account"
              className="text-blue-600 hover:underline"
            >
               Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
