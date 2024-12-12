// src/redux/authActions.js
import axios from 'axios';
import { 
  registerStart, 
  registerSuccess, 
  registerFailure, 
  loginStart, 
  loginSuccess, 
  loginFailure 
} from './authSlice';

// Backend base URL (make sure it matches your backend server)
const BASE_URL = 'http://localhost:5000/api/auth'; // Adjust this URL according to your backend

// Register Action
export const registerUser = (userData) => async (dispatch) => {
  dispatch(registerStart());
  try {
    const res = await axios.post(`${BASE_URL}/register`, userData);
    dispatch(registerSuccess({ user: res.data.user, token: res.data.token }));
  } catch (err) {
    dispatch(registerFailure(err.response.data.message));
  }
};

// Login Action
export const loginUser = (credentials) => async (dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(`${BASE_URL}/login`, credentials);
    dispatch(loginSuccess({ user: res.data.user, token: res.data.token }));
  } catch (err) {
    dispatch(loginFailure(err.response.data.message));
  }
};
