import axios from 'axios';
import { 
  signupStart,  // Correct this import
  signupSuccess, 
  registerFailure,  // Same here, this should match the action names in authSlice
  loginStart, 
  loginSuccess, 
  loginFailure,
  updateProfileSuccess,
} from './authSlice';

const BASE_URL = 'http://localhost:5000/api/auth'; // local

// const BASE_URL = 'https://scholarship-backend-orpin.vercel.app/api/auth'; //production 
// Register Action
export const registerUser = (userData) => async (dispatch) => {
  dispatch(signupStart()); // Use signupStart here
  try {
    const res = await axios.post(`${BASE_URL}/register`, userData);
    dispatch(signupSuccess({ user: res.data.user, token: res.data.token }));
  } catch (err) {
    const errorMessage = err.response?.data?.message || 'An error occurred. Please try again.';
    dispatch(registerFailure(errorMessage));
  }
};

// Login Action
export const loginUser = (credentials) => async (dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(`${BASE_URL}/login`, credentials);
    dispatch(loginSuccess({ user: res.data.user, token: res.data.token }));
  } catch (err) {
    const errorMessage = err.response?.data?.message || 'An error occurred. Please try again.';
    dispatch(loginFailure(errorMessage));
  }
};

// Profile Update Action
export const updateProfile = (userData) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    const res = await axios.put(`${BASE_URL}/edit-profile`, userData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(updateProfileSuccess(res.data.user)); // Assuming this action updates the user in the Redux store
  } catch (err) {
    dispatch(updateProfileFailure(err.response?.data?.message || 'Error updating profile'));
  }
};
