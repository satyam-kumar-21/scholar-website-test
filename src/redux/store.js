// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import scholarReducer from './scholarSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    scholar: scholarReducer,  // Include the scholar reducer
  },
});

export default store;
