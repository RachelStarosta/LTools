import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const menu = document.getElementById("menu");

Array.from(document.getElementsByClassName("menu-item"))
  .forEach((item, index) => {
    item.onmouseover = () => {
      menu.dataset.activeIndex = index;
    }
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <menu/>
  </React.StrictMode>
);

