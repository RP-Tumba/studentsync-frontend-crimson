import logo from '../images/logo-smait.png';
import '../style/navbar.css';

const Navbar = () => {
  return (
    <>
         {/* Top Nav */}

      <header className="navbar">
        <div className="logo"> <img src= {logo} alt="" /> <p>STUDENTSYNC</p></div>
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">Add Student</a>
          <a href="#" className="active">All Students</a>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
