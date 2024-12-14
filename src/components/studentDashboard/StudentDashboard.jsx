import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaCog, FaSignOutAlt } from 'react-icons/fa'; // Import icons for settings and logout
import { logout } from '../../redux/authSlice';

function StudentDashboard() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout()); // Dispatch the logout action
  };

  const { name = 'Guest', mobile = 'Not available', email = 'Not available' } = user || {};

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col sm:flex-row">
      {/* Sidebar */}
      <div className="w-full sm:w-1/4 bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 text-white p-6 sm:h-auto sm:flex sm:flex-col">
  <div className="text-center mb-8">
    <div className="rounded-full bg-gray-500 text-white w-32 h-32 mx-auto mb-4 flex items-center justify-center">
      <span className="text-4xl font-bold">
        {name ? name.split(' ').map((name) => name[0]).join('') : 'U'}
      </span>
    </div>
    <h2 className="text-xl font-semibold">{name}</h2>
    <p className="text-sm text-gray-300">{email}</p>
  </div>
  <nav>
    <ul className="space-y-4">
      <li>
        <Link to="/dashboard" className="flex items-center space-x-2 text-white hover:bg-gray-700 p-2 rounded-md transition duration-200">
          <FaCog className="text-lg" /> {/* Settings Icon */}
          <span>Settings</span>
        </Link>
      </li>
      <li>
        <button onClick={handleLogout} className="flex items-center space-x-2 text-white hover:bg-gray-700 p-2 rounded-md transition duration-200">
          <FaSignOutAlt className="text-lg" /> {/* Logout Icon */}
          <span><Link to="/login">Logout</Link></span>
        </button>
      </li>
    </ul>
  </nav>
</div>


      {/* Main Content */}
      <div className="flex-1 p-6 sm:p-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Student Profile</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium text-gray-700">Full Name</h3>
              <p className="text-gray-600">{name}</p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-700">Email</h3>
              <p className="text-gray-600">{email}</p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-700">Mobile Number</h3>
              <p className="text-gray-600">{mobile}</p>
            </div>
          </div>

          {/* Edit Profile Button */}
          <div className="mt-6">
            <Link to="/edit-profile" className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200">
              Edit Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
