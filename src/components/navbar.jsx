import React, { Component } from 'react';


// Stateless Functional Component

const Navbar = ({totalCounter}) => {
  return ( <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
    Navbar{ " " } 
    <span className="badge badge-pill badge-secondary">{totalCounter}</span>
    </a>
  </div>
  </nav> );
}
 
export default Navbar;
 