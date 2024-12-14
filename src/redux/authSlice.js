import { createSlice } from '@reduxjs/toolkit';

// Retrieve token and user from localStorage if available
const savedToken = localStorage.getItem('token');
const savedUser = localStorage.getItem('user');

const initialState = {
  user: savedUser ? JSON.parse(savedUser) : null, // Retrieve and parse user data from localStorage
  token: savedToken || null, // Retrieve token from localStorage
  error: null,
  loading: false,
};

// JWT expiration check function
const isTokenValid = (token) => {
  if (!token) return false;
  const decodedToken = JSON.parse(atob(token.split('.')[1])); // Decode the JWT
  return decodedToken.exp * 1000 > Date.now(); // Compare expiration with current time
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Register actions
    signupStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signupSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem('token', action.payload.token); // Store token in localStorage
      localStorage.setItem('user', JSON.stringify(action.payload.user)); // Store user data in localStorage
    },
    registerFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Login actions
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem('token', action.payload.token); // Store token in localStorage
      localStorage.setItem('user', JSON.stringify(action.payload.user)); // Store user data in localStorage
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Logout action
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('token'); // Remove token from localStorage
      localStorage.removeItem('user'); // Remove user data from localStorage
    },

    // Update profile success
    updateProfileSuccess: (state, action) => {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload)); // Store updated user in localStorage
    },
    updateProfileFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  signupStart,  // This is the action that should be used for registering
  signupSuccess,
  registerFailure,
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  updateProfileSuccess, 
  updateProfileFailure
} = authSlice.actions;


export default authSlice.reducer;
