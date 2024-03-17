import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const render = () => {
  root.render(
    // 帮忙检查代码中不太合理的地方
    <React.StrictMode>
      {/* 整个应用都要用一个router来管理 */}
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>,
  );
};
render();

// store更新，根组件进行render，哪些地方要渲染交给diff算法。
store.subscribe(render);

// 记录页面性能
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
