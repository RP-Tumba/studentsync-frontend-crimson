import React, { useState } from "react";
import "./Header.css";
import logo from "../../images/logo-smait.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isActive,setIsActive] = useState("/")
  
  
  
  return (
    <header className="header">
      <div className="logo">
     
        <img src={logo} alt="" /> <p>STUDENTSYNC</p>
      </div>

      <nav className="nav-links">
        <Link onClick={()=>setIsActive("/")} style={isActive == "/"?{color:" rgb(137, 194, 5)"}:{color:"black"}} to="/" className="header-1">Home</Link>
        <Link onClick={()=>setIsActive("/newStudent")} style={isActive == "/newStudent"?{color:" rgb(137, 194, 5)"}:{color:"black"}} to="/newStudent">Add student</Link>
        <Link  onClick={()=>setIsActive("/studentList")} style={isActive == "/studentList"?{color:" rgb(137, 194, 5)"}:{color:"black"}} to="/studentsList" className="btn-login">
          Get all students
        </Link>
      </nav>
    </header>
  );
};

export default Header;
