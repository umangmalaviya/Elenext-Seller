import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppOne from './AppOne';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <AppOne />
  </React.StrictMode>
);

