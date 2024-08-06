import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // Ensure this is the correct path to your App component
import reportWebVitals from './reportWebVitals';

// Create the root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root element
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

reportWebVitals(console.log)
reportWebVitals();
