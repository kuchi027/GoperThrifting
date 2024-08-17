import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/about-us">About Us</a>
        <a href="/contact-support">Contact Support</a>
        <a href="/terms-conditions">Terms and Conditions</a>
        <a href="/privacy-policy">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
