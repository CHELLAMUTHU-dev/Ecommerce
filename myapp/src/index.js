import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <head>
        <title>My Ecommerce App</title>
        <meta name="description" content="Best ecommerce app for your needs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
      <App />
    </>
  </React.StrictMode>
)