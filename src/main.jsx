import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';  // Import the Provider component from react-redux
import './index.css';
import App from './App.jsx';
import store from '../src/redux/store.js';  // Import your Redux store

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>  {/* Wrap App with Provider to pass the Redux store */}
      <App />
    </Provider>
  </StrictMode>,
);
