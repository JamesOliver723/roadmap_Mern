import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Grab the root DOM element (non-null assertion because we know it exists)
const rootElement = document.getElementById('root')!;
const root = ReactDOM.createRoot(rootElement);

// Render the app wrapped in StrictMode for dev warnings
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
