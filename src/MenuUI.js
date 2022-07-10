import React, { useContext, useState } from "react";
// CSS
import "./style.css";

export const MenuUI = ({ triggerContent }) => {
  return (
    <div className='true'>
      <menu
        className={triggerContent ? "menu-overflow-shown" : "menu-overflow"}
      >
        <div className='menu-content'>
          <div className='content-div'>
            <h1 id='modal-title'>Products</h1>
            <div className='modal-content'>
              <a href='./products.html'>Payment</a>
              <a href='./terminal.html'>Terminal</a>
              <a href='./connect.html'>Connect</a>
            </div>
            <h1 id='modal-title'>Developers</h1>
            <div className='modal-content'>
              <a href='./plugins.html'>Plugins</a>
              <a href='./libraries.html'>Libraries</a>
              <a href='./help.html'>Help</a>
              <a href='./billing.html'>Billing</a>
            </div>
            <h1 id='modal-title'>Company</h1>
            <div className='modal-content'>
              <a href='./about.html'>About</a>
              <a href='./customers.html'>Customers</a>
            </div>
          </div>
          <button id='close-menu'>X</button>
        </div>
      </menu>
    </div>
  );
};
