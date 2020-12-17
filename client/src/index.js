import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MainApp from './MainApp';
import reportWebVitals from './reportWebVitals';
// import axios from 'axios';
import './index.css';


// axios.interceptors.request.use( config => {
//   const token = getCookie('token');
//   config.headers.authorization = token;
//   // console.log(config);
//   return config;
// }, error => {
//   // console.log(error);
//   return Promise.reject(error);
// });

// axios.interceptors.response.use( null, (error) => {
//   if(error.response.status === 401){
//      signout(() => {
//        window.location.href ='/signin';
//      });
//   }

//   return Promise.reject(error);
// });

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <MainApp />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
