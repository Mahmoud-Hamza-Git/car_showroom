import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { CarsContextProvider } from './context/CarsContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <CarsContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CarsContextProvider>
);
