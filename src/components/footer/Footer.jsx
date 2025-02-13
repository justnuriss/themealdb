import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; 
import "./Footer.css"; 

function Footer () {
  return (
    <footer className="footer container">
      <div className="footer-content">
        <div className="footer-text">
          <h3 className="footer-title">TheMealDB</h3>
          <p className="footer-description">
            Discover delicious recipes, track meals, and get inspired by our amazing collection of food.
          </p>
        </div>

        <div className="footer-social">
          <a href="https://github.com" className="social-icon">
            <FaGithub size={30} />
          </a>
          <a href="https://linkedin.com"  className="social-icon">
            <FaLinkedin size={30} />
          </a>
          <a href="https://twitter.com"  className="social-icon">
            <FaTwitter size={30} />
          </a>
        </div>

        <p className="footer-copy">&copy; 2025 TheMealDB. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
