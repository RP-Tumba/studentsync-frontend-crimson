import React from "react";
import "./Footer.css";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-details">
          <h4>STUDENTSYNC MANAGEMENT APP</h4>
           <p className="footer-info-1">Students management platform</p> <br />
           <p className="footer-info-2">our Address</p>
           <div className="footer-info-3">
            
              <LocationOnIcon className="na"/> <p> Gasabo District, Kinyinya Sector Murama Cell, Rusenyi Village
                  {/* &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                  KG 29 Ave 16, Kigali, Rwanda
                </p>
           </div>
             <p className="footer-info-4"> <AccessTimeIcon />  <p>Working Hours: Monday - Friday 08:00 - 17:00</p></p>
         
        </div>
        <div className="footer-contacts">
          <h4>Contact</h4>
          <p className="c-1"><MailOutlineIcon className="contact-icon"/> <p>support@studentapp.com</p></p>
          <p className="c-1"> <PhoneIcon /> 07853830843</p>
        </div>
        <div className="footer-socialmedia">
          <h4>Follow Us</h4>
          <p>
            <InstagramIcon />
            <FacebookIcon />
            <YouTubeIcon />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
