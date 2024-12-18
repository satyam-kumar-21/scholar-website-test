import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchScholarshipByUserId } from './scholarActions'; // Import the action

function AppliedForm() {
  const dispatch = useDispatch();

  // Access user and scholar details from Redux
  const user = useSelector((state) => state.auth.user);
  const scholarDetails = useSelector((state) => state.scholar.details);
  const loading = useSelector((state) => state.scholar.loading);
  const error = useSelector((state) => state.scholar.error);

  useEffect(() => {
    if (user?._id) {
      dispatch(fetchScholarshipByUserId(user.id)); // Dispatch action to fetch scholar details
    }
  }, [dispatch, user?.id]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Applied Form</h2>

      {/* Loading and Error States */}
      {loading && <p className="text-blue-600">Loading scholar details...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {/* Scholar Details */}
      {scholarDetails ? (
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-medium text-gray-700">Scholarship ID</h3>
            <p className="text-gray-600">{scholarDetails.id}</p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-gray-700">Full Name</h3>
            <p className="text-gray-600">{scholarDetails.fullName}</p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-gray-700">Status</h3>
            <p className="text-gray-600 capitalize">{scholarDetails.status}</p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2">
            <button
              disabled={scholarDetails.status !== 'complete'}
              className={`py-2 px-4 rounded-md transition duration-200 ${
                scholarDetails.status === 'complete'
                  ? 'bg-green-600 text-white hover:bg-green-700'
                  : 'bg-gray-400 text-gray-200 cursor-not-allowed'
              }`}
            >
              Start Test
            </button>

            <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200">
              View Scholar Details
            </button>
          </div>
        </div>
      ) : (
        !loading && <p className="text-gray-600">No scholar details available.</p>
      )}
    </div>
  );
}

export default AppliedForm;
