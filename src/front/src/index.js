import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';

// Replace ReactDOM.render with createRoot
const root = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(root);

reactRoot.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);