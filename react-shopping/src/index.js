import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import App from './App';
import  {NetflixRegisterComponent}  from './component/NetflixRegisterComponent';
import NetflixIndexComponent from './component/NetflixIndexComponent';
import LoginComponent from './component/LoginComponent';

import reportWebVitals from './reportWebVitals';
import ApiComponent from './component/ApiComponent';
import ApiComponentCart from './component/ApiComponentCart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <NetflixIndexComponent /> */}
    {/* <LoginComponent/> */}
    <ApiComponentCart/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
