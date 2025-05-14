import React from 'react';
import './Header.css';
import logo from '../../images/logo-smait.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo"> <img src= {logo} alt="" /> <p>STUDENTSYNC</p></div>
      
      <nav className="nav-links">
        <Link to ="/">Home</Link>
        <a href="#about">About</a>
        <Link to ="/studentsList" className="btn-login">Get all students</Link>
      </nav>
    </header>
  );
};

export default Header;
