import React from "react";
import "./Footer.css";
import iet from "../../assets/ietlogo.png"
import arrow from "../../assets/arrow.png"

const Footer = () => {
  return <div id="footer">
    <div className="foot">
      <div className="cont1">
        <div className="con1">
          <h1>HACKOFF</h1>
        </div>
      </div>
      <div className="cont2">
        <div className="con2">
          <div className="f1">
            <div className="sec1">
              <div className="text1">
                <p>A FLAGSHIP HACKATHON BY:</p>
              </div>
              <div className="img1">
                <img src={iet} height="100rem" />
              </div>
            </div>
            <div className="link">
              <h6>GO TO WEBSITE</h6>
              <img src={arrow}/>
            </div>
          </div>
          <div className="f2">
            <div className="menu"></div>
          </div>
          <div className="f3">
            <div className="contact"></div>
          </div>
        </div>
      </div>
      <div className="cont3">

      </div>
    </div>
  </div>;
};

export default Footer;
