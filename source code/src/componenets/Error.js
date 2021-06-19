import React from 'react';
import { NavLink } from 'react-router-dom';
const Error = () => {
  return (
    <>
    <h1 className="four">404</h1>
      <div className=" error">
        <div className="container title">
          <div className="heading">We are sorry,page not found!</div>
          <div className="sub_heading">
            the page you are looking for might have been
             removed had its name changed or
            is temporarily unavaiable
          </div>
          <button className="back"><NavLink className="back" to="/">
             Go Back To Homepage
          </NavLink></button>
        </div>
      </div>
    </>
  );
};
export default Error;
