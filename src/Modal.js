import React from "react";
// CSS
import "./style.css";

export const Modal = ({ modalContent }) => {
  if (modalContent === "Products") {
    return (
      <>
        <article className='modal-products'>
          <div id='triangle-up-1'></div>
          <h1 id='modal-title'>Products</h1>
          <div className='modal-content'>
            <a href='./products.html'>Payment</a>
            <a href='./terminal.html'>Terminal</a>
            <a href='./connect.html'>Connect</a>
          </div>
        </article>
      </>
    );
  } else if (modalContent === "Developers") {
    return (
      <>
        <article className='modal-developers'>
          <div id='triangle-up-2'></div>
          <h1 id='modal-title'>Developers</h1>
          <div className='modal-content'>
            <a href='./plugins.html'>Plugins</a>
            <a href='./libraries.html'>Libraries</a>
            <a href='./help.html'>Help</a>
            <a href='./billing.html'>Billing</a>
          </div>
        </article>
      </>
    );
  } else if (modalContent === "Company") {
    return (
      <>
        <article className='modal-company'>
          <div id='triangle-up-3'></div>
          <h1 id='modal-title'>Company</h1>
          <div className='modal-content'>
            <a href='./about.html'>About</a>
            <a href='./customers.html'>Customers</a>
          </div>
        </article>
      </>
    );
  }
  return null;
};
