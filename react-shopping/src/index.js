import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import ShoppingComponent from './component/ShoppingComponent';
import { CookiesProvider } from 'react-cookie';
import ReducerDispatcher from './component/ReducerDispatcher';
import CustomHookDemo from './component/CustomHookDemo';
import Cookie from './component/Cookie';
import NetflixIndexComponent from './component/NetflixIndexComponent';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <Cookie/>
    </CookiesProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
