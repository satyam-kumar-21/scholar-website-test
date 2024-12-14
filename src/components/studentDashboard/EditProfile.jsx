import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { updateProfile } from '../../redux/authActions';

function EditProfile() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize navigate

  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [mobile, setMobile] = useState(user?.mobile || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = { name, email, mobile };

    // Dispatch profile update action
    dispatch(updateProfile(updatedUser));

    // After dispatching the update, redirect to the dashboard
    navigate('/dashboard'); // Redirect to the dashboard page
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex justify-center p-8">
        <div className="bg-white shadow-md rounded-lg p-6 w-full sm:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="text-xl font-medium">Full Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 mt-2 border rounded-md"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-xl font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 mt-2 border rounded-md"
                />
              </div>

              <div>
                <label htmlFor="mobile" className="text-xl font-medium">Mobile Number</label>
                <input
                  type="text"
                  id="mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="w-full px-4 py-2 mt-2 border rounded-md"
                />
              </div>
            </div>

            <button type="submit" className="bg-blue-600 text-white py-2 px-4 mt-6 rounded hover:bg-blue-700">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
