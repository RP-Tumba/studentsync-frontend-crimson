import logo from '../images/logo-smait.png';
import '../style/navbar.css';
import Header from './responsiveness/Header';

const Navbar = () => {
  return (
    <>
         {/* Top Nav */}
{/* 
      <header className="navbar">
        <div className="logo"> <img src= {logo} alt="" /> <p>STUDENTSYNC</p></div>
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">Add Student</a>
          <a href="#" className="active">All Students</a>
        </nav>
      </header> */}

      <Header />
    </>
  );
};

export default Navbar;
