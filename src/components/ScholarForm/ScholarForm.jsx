import React, { useState } from 'react';

function ScholarForm() {
  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    email: '',
    mobile: '',
    village: '',
    city: '',
    district: '',
    state: '',
    tenthPercentage: '',
    tenthBoard: '',
    twelfthPercentage: '',
    twelfthBoard: '',
    twelfthStream: '',
    twelfthSubjects: '',
    ugPercentage: '',
    ugUniversity: '',
    ugCourse: '',
    pgPercentage: '',
    pgUniversity: '',
    pgCourse: '',
    highestQualificationFile: null,
    selectedCourse: '',
    selectedBranch: '',  // Added branch field
  });

  // Available courses and their corresponding branches
  const courses = [
    { name: 'B.Tech', branches: ['Computer Science Engineering', 'Mechanical Engineering', 'Electrical Engineering', 'Civil Engineering'] },
    { name: 'M.Tech', branches: ['Computer Science', 'Structural Engineering', 'Mechanical Engineering'] },
    { name: 'B.Sc', branches: ['Physics', 'Chemistry', 'Mathematics'] },
    { name: 'M.Sc', branches: ['Physics', 'Chemistry', 'Mathematics'] },
    // Add more courses as needed
  ];

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle file change (for uploading highest qualification marksheets)
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      highestQualificationFile: e.target.files[0],
    });
  };

  // Handle course selection
  const handleCourseChange = (e) => {
    const selectedCourse = e.target.value;
    setFormData({
      ...formData,
      selectedCourse,
      selectedBranch: '',  // Reset branch when course changes
    });
  };

  // Handle branch selection
  const handleBranchChange = (e) => {
    setFormData({
      ...formData,
      selectedBranch: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Scholarship Application Submitted!');
    console.log(formData);
    // You would typically send the form data to an API here
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Apply for the Scholarship</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="text-xl font-semibold text-gray-800">Personal Information</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="fatherName" className="block text-gray-700 font-medium mb-2">Father's Name</label>
            <input
              type="text"
              id="fatherName"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="mobile" className="block text-gray-700 font-medium mb-2">Mobile Number</label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>
        </div>

        {/* Address Information */}
        <div className="text-xl font-semibold text-gray-800">Address Information</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="village" className="block text-gray-700 font-medium mb-2">Village</label>
            <input
              type="text"
              id="village"
              name="village"
              value={formData.village}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label htmlFor="district" className="block text-gray-700 font-medium mb-2">District</label>
            <input
              type="text"
              id="district"
              name="district"
              value={formData.district}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label htmlFor="city" className="block text-gray-700 font-medium mb-2">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label htmlFor="state" className="block text-gray-700 font-medium mb-2">State</label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        {/* Course Selection */}
        <div className="text-xl font-semibold text-gray-800">Select Course for Scholarship</div>
        <div className="mt-4">
          <label htmlFor="selectedCourse" className="block text-gray-700 font-medium mb-2">Select Course</label>
          <select
            id="selectedCourse"
            name="selectedCourse"
            value={formData.selectedCourse}
            onChange={handleCourseChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          >
            <option value="">Select Course</option>
            {courses.map((course, index) => (
              <option key={index} value={course.name}>
                {course.name}
              </option>
            ))}
          </select>
        </div>

        {/* Branch Selection */}
        {formData.selectedCourse && (
          <div className="mt-4">
            <label htmlFor="selectedBranch" className="block text-gray-700 font-medium mb-2">Select Branch</label>
            <select
              id="selectedBranch"
              name="selectedBranch"
              value={formData.selectedBranch}
              onChange={handleBranchChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            >
              <option value="">Select Branch</option>
              {courses
                .find(course => course.name === formData.selectedCourse)
                ?.branches.map((branch, index) => (
                  <option key={index} value={branch}>
                    {branch}
                  </option>
                ))}
            </select>
          </div>
        )}

        {/* Academic Qualifications */}
        <div className="text-xl font-semibold text-gray-800 mt-6">Academic Qualifications</div>

        {/* 10th Details (Mandatory) */}
        <div className="mt-4">
          <h4 className="text-lg font-semibold text-gray-700 mb-2">Matriculation (10th Class) <span className="text-red-500">*</span></h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="tenthPercentage" className="block text-gray-700 font-medium mb-2">10th Percentage</label>
              <input
                type="text"
                id="tenthPercentage"
                name="tenthPercentage"
                value={formData.tenthPercentage}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor="tenthBoard" className="block text-gray-700 font-medium mb-2">10th Board</label>
              <select
                id="tenthBoard"
                name="tenthBoard"
                value={formData.tenthBoard}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              >
                <option value="">Select Board</option>
                <option value="CBSE">CBSE</option>
                <option value="ICSE">ICSE</option>
                <option value="State Board">State Board</option>
                {/* Add more boards as required */}
              </select>
            </div>
          </div>
        </div>

        {/* 12th Details (Optional) */}
        <div className="mt-4">
          <h4 className="text-lg font-semibold text-gray-700 mb-2">Intermediate (12th Class)</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="twelfthPercentage" className="block text-gray-700 font-medium mb-2">12th Percentage</label>
              <input
                type="text"
                id="twelfthPercentage"
                name="twelfthPercentage"
                value={formData.twelfthPercentage}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="twelfthBoard" className="block text-gray-700 font-medium mb-2">12th Board</label>
              <select
                id="twelfthBoard"
                name="twelfthBoard"
                value={formData.twelfthBoard}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md"
              >
                <option value="">Select Board</option>
                <option value="CBSE">CBSE</option>
                <option value="ICSE">ICSE</option>
                <option value="State Board">State Board</option>
              </select>
            </div>

            <div>
              <label htmlFor="twelfthStream" className="block text-gray-700 font-medium mb-2">12th Stream</label>
              <select
                id="twelfthStream"
                name="twelfthStream"
                value={formData.twelfthStream}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md"
              >
                <option value="">Select Stream</option>
                <option value="Science">Science</option>
                <option value="Commerce">Commerce</option>
                <option value="Arts">Arts</option>
              </select>
            </div>

            <div>
              <label htmlFor="twelfthSubjects" className="block text-gray-700 font-medium mb-2">12th Subjects (comma separated)</label>
              <input
                type="text"
                id="twelfthSubjects"
                name="twelfthSubjects"
                value={formData.twelfthSubjects}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>

        {/* UG Details (Mandatory) */}
        <div className="mt-6">
          <h4 className="text-lg font-semibold text-gray-700 mb-2">Undergraduate Qualification (UG)</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="ugPercentage" className="block text-gray-700 font-medium mb-2">UG Percentage</label>
              <input
                type="text"
                id="ugPercentage"
                name="ugPercentage"
                value={formData.ugPercentage}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor="ugUniversity" className="block text-gray-700 font-medium mb-2">UG University</label>
              <input
                type="text"
                id="ugUniversity"
                name="ugUniversity"
                value={formData.ugUniversity}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor="ugCourse" className="block text-gray-700 font-medium mb-2">UG Course</label>
              <input
                type="text"
                id="ugCourse"
                name="ugCourse"
                value={formData.ugCourse}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>
        </div>

        {/* PG Details (Optional) */}
        <div className="mt-6">
          <h4 className="text-lg font-semibold text-gray-700 mb-2">Postgraduate Qualification (PG)</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="pgPercentage" className="block text-gray-700 font-medium mb-2">PG Percentage</label>
              <input
                type="text"
                id="pgPercentage"
                name="pgPercentage"
                value={formData.pgPercentage}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="pgUniversity" className="block text-gray-700 font-medium mb-2">PG University</label>
              <input
                type="text"
                id="pgUniversity"
                name="pgUniversity"
                value={formData.pgUniversity}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="pgCourse" className="block text-gray-700 font-medium mb-2">PG Course</label>
              <input
                type="text"
                id="pgCourse"
                name="pgCourse"
                value={formData.pgCourse}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Upload Marksheets */}
        <div className="mt-6">
          <label htmlFor="highestQualificationFile" className="block text-gray-700 font-medium mb-2">
            Upload Highest Qualification Marksheets (10th/12th/UG/PG)
          </label>
          <input
            type="file"
            id="highestQualificationFile"
            name="highestQualificationFile"
            onChange={handleFileChange}
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>

        {/* Submit Button */}
        <div className="mt-6 text-center">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
}

export default ScholarForm;
