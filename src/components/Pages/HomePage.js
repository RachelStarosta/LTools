import React, { Component, useEffect } from 'react';



const HomePage = () => {
    useEffect(() => {
        const menu = document.getElementById("menu");
    
        const handleMouseMove = (event) => {
          const mouseX = event.clientX - menu.getBoundingClientRect().left; //x axis
          const index = Math.floor(mouseX / (menu.offsetWidth / 4)); 
    
          console.log("mouseX:" + mouseX  + "index:"+  index); // Output the index to the console
        };
    
        menu.addEventListener("mousemove", handleMouseMove);
    
        // Clean up the event listener when the component is unmounted
        return () => {
          menu.removeEventListener("mousemove", handleMouseMove);
        };
      }, []);
    return (
        <>
        <div id = "menu" data-active-index>
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
