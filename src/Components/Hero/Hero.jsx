import React from "react";
import "./Hero.css";
import Navbar from "../Navbar/Navbar";
import logo from "../../assets/logo-big.png";

const Hero = () => {
  return (
    <div className="hero-main">
      <Navbar />
      <div className="hero-logo">
        <img src={logo} alt="" className="hero-logo-img" />
      </div>
      <div className="coming-soon-container">
        <div className="coming-soon">
          <div>COMING SOON * COMING SOON * COMING SOON * COMING SOON * COMING SOON * COMING SOON * COMING SOON </div>
          <div>COMING SOON * COMING SOON * COMING SOON * COMING SOON * COMING SOON * COMING SOON * COMING SOON </div>
          <div>COMING SOON * COMING SOON * COMING SOON * COMING SOON * COMING SOON * COMING SOON * COMING SOON </div>
          <div>COMING SOON * COMING SOON * COMING SOON * COMING SOON * COMING SOON * COMING SOON * COMING SOON </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
