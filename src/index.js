import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'boxicons'
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <script src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCbUaFDL7C08hyz9lNN7IHlJHfKQO-4mkk&libraries=places`}></script>
     
    <App />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
