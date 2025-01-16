import React, { useEffect, useState} from "react";
import { Link } from 'react-scroll';
import s_logo from "../images/white_sanstha_logo.png";
import c_logo from "../images/white_college_logo.png";
import "../style/Header.css";

const Header = ({ toggleDrawer }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 968);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 968);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="header">
      <div className="navbar">
        <div className="logo-left">
          <img id="logo1" src={s_logo} alt="Sanstha Logo" />
        </div>
        <ul className="nav-menu">
  <li className="nav-item">
    <Link className="nav-link" to="home" smooth={true} duration={500}>Home</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="events" smooth={true} duration={500}>Events</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="schedule" smooth={true} duration={500}>Schedule</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="themes" smooth={true} duration={500}>Themes</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="star-lineup" smooth={true} duration={500}>Star Line-up</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="team" smooth={true} duration={500}>Team</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="gallery" smooth={true} duration={500}>Gallery</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="about-us" smooth={true} duration={500}>About Us</Link>
  </li>
</ul>

        <div className="logo-right">
          <img id="logo2" src={c_logo} alt="College Logo" />
        </div>
      </div>
      <div className="tag">
        <p className="tag1">MKSSS's Cummins College of Engineering for Women, Pune</p>
        <p className="tag3"><span>GANDHAAR</span> <span>2025</span></p>
      </div>
      {isMobile && (
        <div className="floating-icon" onClick={()=> toggleDrawer(true)}>
          <div className="floating-content"></div>
        </div>
      )}
    </div>
  );
};

export default Header;
