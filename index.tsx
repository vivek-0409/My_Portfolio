import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Find the root element in the HTML
const rootElement = document.getElementById('root');
if (!rootElement) {
  // Throw an error if the root element is not found, ensuring the app cannot mount incorrectly
  throw new Error("Could not find root element to mount to");
}

// Create a React root and render the application in strict mode
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);