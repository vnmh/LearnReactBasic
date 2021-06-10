import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  /* StrictMode là 1 component giúp đảm bảo ứng dụng tuân theo những tiêu chuẩn phát triển đúng nhất,
  được quản lý 1 cách nghiêm ngặt hơn về cú pháp */
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
