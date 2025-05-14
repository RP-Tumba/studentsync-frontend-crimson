import React from 'react';
import './Header.css';
import logo from '../../images/logo-smait.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo"> <img src= {logo} alt="" /> <p>STUDENTSYNC</p></div>
      
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#login" className="btn-login">Get all students</a>
      </nav>
    </header>
  );
};

export default Header;
