import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 帮忙检查代码中不太合理的地方
  <React.StrictMode>
    {/* 整个应用都要用一个router来管理 */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

// 记录页面性能
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
