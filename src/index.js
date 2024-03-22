import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';

// import bootstrap css

import 'bootstrap/dist/css/bootstrap.min.css';


const Root = ReactDOM.createRoot(document.getElementById('root'));

Root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

