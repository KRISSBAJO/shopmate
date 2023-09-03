import React from 'react';
import './footer.css'; // Import the corresponding CSS file
import logo from '../assets/logo.png';
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-content">
        <NavLink to="/" className="logo-link">
            <img src={logo} alt="LogaXP Redus Cart Logo" className="logo" />
        
        </NavLink>
        <p className="footer-text">Leader in sales of exotic cars, luxury vehicles, and cutting-edge automotive technology for a better driving experience.</p>

        <ul className="footer-links">
        <li>
              <Link to="/" className="mr-4 hover:underline md:mr-6 ">About</Link>
          </li>
          <li>
              <Link to="/" className="mr-4 hover:underline md:mr-6">Premium</Link>
          </li>
          <li>
              <Link to="/" className="mr-4 hover:underline md:mr-6 ">Campaigns</Link>
          </li>
          <li>
              <Link to="/" className="mr-4 hover:underline md:mr-6">Blog</Link>
          </li>
          <li>
              <Link to="/" className="mr-4 hover:underline md:mr-6">Affiliate Program</Link>
          </li>
          <li>
              <Link to="/" className="mr-4 hover:underline md:mr-6">FAQs</Link>
          </li>
          <li>
              <Link to="/" className="mr-4 hover:underline md:mr-6">Contact</Link>
          </li>
        </ul>
        <span className="footer-copy">© 2021-2022 <Link to="/" className="copy-link">LogaXP™</Link>. All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
