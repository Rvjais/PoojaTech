import React from 'react';
import '../footer/footer.css';
import { Element } from 'react-scroll';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
    <Element name='contacts'>
 <footer className="footer">
      <div className="footer-content">
        <h3>POOJA TECH</h3>
        <p className="tagline">Complete Solutions for Pharmaceutical & Industrial Needs</p>

        <div className="footer-info">
          <div className="footer-item">
            <FaPhoneAlt className="footer-icon" />
            <span>+91-9876543210</span>
          </div>

          <div className="footer-item">
            <FaEnvelope className="footer-icon" />
            <span>contact@poojatech.in</span>
          </div>

          <div className="footer-item">
            <FaMapMarkerAlt className="footer-icon" />
            <span>Plot No. 123, Industrial Area, Sikkim, India</span>
          </div>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} Pooja Tech. All rights reserved.
        </p>
      </div>
    </footer>

    </Element>
    
    
    </>
   
  );
};

export default Footer;
