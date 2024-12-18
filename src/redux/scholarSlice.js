// src/redux/scholarSlice.js
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Initial state for the scholarship form
const initialState = {
  formData: {},
  loading: false,
  success: false,
  error: null,
};

// Create the scholarship slice
const scholarSlice = createSlice({
  name: 'scholar',
  initialState,
  reducers: {
    // Update form data in the Redux store
    updateFormData: (state, action) => {
      state.formData = action.payload;
    },
    // Actions for submitting the form
    submitFormStart: (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    submitFormSuccess: (state,action) => {
      state.loading = false;
      state.success = true;
      state.formData = action.payload;  // Clear the form data on successful submission
    },
    submitFormFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  updateFormData,
  submitFormStart,
  submitFormSuccess,
  submitFormFailure,
} = scholarSlice.actions;

export default scholarSlice.reducer;

