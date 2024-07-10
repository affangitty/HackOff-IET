import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo-small.png";
import cross from "../../assets/cross.png";
import hamburger from "../../assets/hamburger.png";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav>
      <ul className={`${isMobile ? "mobile" : ""}`}>
        <li className="navbar-logo-container">
          <img src={logo} alt="Logo" />
        </li>
        {isMobile ? (
          <li onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <img src={cross} alt="x" />
            ) : (
              <img src={hamburger} alt="=" />
            )}
          </li>
        ) : (
          <>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </>
        )}
      </ul>
      {isMobile && isMenuOpen && (
        <ul className="navbar-menu">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
