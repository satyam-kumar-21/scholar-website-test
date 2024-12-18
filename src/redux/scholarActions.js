import axios from 'axios';
import { submitFormStart, submitFormSuccess, submitFormFailure } from './scholarSlice';

// Action to submit the scholarship form data
export const submitScholarshipForm = (formData) => async (dispatch) => {
  dispatch(submitFormStart()); // Dispatch action to set loading state to true
  
  try {
    // Make the API request to submit the form data
    const response = await axios.post('http://localhost:5000/api/scholar/submit-scholarship', formData);
    
    // Dispatch action to set loading to false and indicate success
    dispatch(submitFormSuccess());
    
    // Optionally, log the response or handle it in some other way
    console.log('Form submitted successfully:', response.data);
    
  } catch (error) {
    // Dispatch action to set loading to false and indicate failure
    dispatch(submitFormFailure(error.response ? error.response.data : error.message));
    
    // Optionally, log the error or display a message to the user
    console.error('Error submitting form:', error);
  }
};

// Optional: Action for fetching a scholarship application by userId (if needed in your app)
export const fetchScholarshipByUserId = (userId) => async (dispatch) => {
  dispatch(submitFormStart()); // Dispatch action to set loading state to true
  
  try {
    // Make the API request to get the scholarship data by userId
    const response = await axios.get(`http://localhost:5000/api/scholar/scholarship/${userId}`);
    
    // Here, you could dispatch an action for success (like storing the data in Redux if needed)
    console.log('Scholarship fetched successfully:', response.data);
    
    dispatch(submitFormSuccess());
    
  } catch (error) {
    // Dispatch action to set loading to false and indicate failure
    dispatch(submitFormFailure(error.response ? error.response.data : error.message));
    
    // Optionally, log the error or display a message to the user
    console.error('Error fetching scholarship:', error);
  }
};

// Optional: Action for fetching all scholarships (if needed in your app)
export const fetchAllScholarships = () => async (dispatch) => {
  dispatch(submitFormStart()); // Dispatch action to set loading state to true
  
  try {
    // Make the API request to get all scholarship applications (for admin or listing purposes)
    const response = await axios.get('http://localhost:5000/api/scholar/all-scholarships');
    
    // Handle the response (such as storing the data in Redux)
    console.log('All scholarships fetched successfully:', response.data);
    
    dispatch(submitFormSuccess());
    
  } catch (error) {
    // Dispatch action to set loading to false and indicate failure
    dispatch(submitFormFailure(error.response ? error.response.data : error.message));
    
    // Optionally, log the error or display a message to the user
    console.error('Error fetching all scholarships:', error);
  }
};


