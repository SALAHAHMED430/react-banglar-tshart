import React from 'react';
import './Header.css'
import { Outlet, Link } from "react-router-dom";
const Header = () => {
    return (
      <nav className="nav-bar-container">
        <div className='nav-bar'>
          <Link to="/">Home</Link>
          <Link to="/review">Order Review</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    );
};

export default Header;