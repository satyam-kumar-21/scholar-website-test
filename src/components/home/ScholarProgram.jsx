import React from 'react';
import { Link } from 'react-router-dom';

function ScholarProgram() {
  return (
    <div className="bg-gray-100 py-12 sm:py-16 md:py-20 text-gray-800">
      <div className="container mx-auto px-6 md:px-12">

        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-8">
          How to Apply for the Scholar Program
        </h2>

        {/* Description */}
        <p className="text-lg text-center text-gray-600 mb-8 max-w-3xl mx-auto">
          Follow these steps to apply for our scholarship program. It's your chance to secure financial aid!
        </p>

        {/* Steps List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {/* Step 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Complete the Application</h3>
            <p className="text-gray-600">
              Fill out the application form to get started with your scholarship request.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Submit Documents</h3>
            <p className="text-gray-600">
              Upload your academic transcripts and other necessary documents for verification.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Select Your Courses</h3>
            <p className="text-gray-600">
              Choose the courses for which you want to apply for the scholarship.
            </p>
          </div>
        </div>

        {/* Step-by-Step Guide */}
        <div className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-800">
            The Application Process
          </h3>
          <div className="space-y-6">
            <div className="flex items-center justify-center">
              <div className="text-lg text-gray-600">
                1. Fill out the online application form available on our website.
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-lg text-gray-600">
                2. Upload your academic documents and other required materials.
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-lg text-gray-600">
                3. Choose the courses you wish to apply for the scholarship program.
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-lg text-gray-600">
                4. Pay the application fee and await an email with your exam schedule.
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-lg text-gray-600">
                5. Complete the online exam. If you rank highly, you will receive a scholarship with a 100%, 60%, or 50% discount based on your exam score.
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link to="/apply-scholar-program" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-lg shadow-md transition duration-200">
            Apply Now
          </Link>
        </div>

      </div>
    </div>
  );
}

export default ScholarProgram;
