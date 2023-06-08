import React, { Component } from 'react';

const menu = document.getElementById("menu");

Array.from(document.getElementsByClassName("menu-item"))
  .forEach((item, index) => {
    item.onmouseover = () => {
      menu.dataset.activeIndex = index;
    }
  });
  
const HomePage = () => {

    return (
        <>
        <div id = "menu">
            <div id = "menu-items"> 
            <a href = "/" className = "menu-item"> Home</a>
            <a href = "/" className = "menu-item"> Gallery</a>
            <a href = "/" className = "menu-item"> About</a>
            <a href = "/" className = "menu-item"> Contact</a>
            </div>
        </div>
        <div id = "menu-background-pattern"> </div>
        <div id = "menu-background-image"> </div>
        </>
    )
};

export default HomePage;
