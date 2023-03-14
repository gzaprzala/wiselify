import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-box'>
        <div className='footer-box-links'>
          <Link to='/' className='footer-link'>
            <span>kontakt</span>
          </Link>
          <Link to='/' className='footer-link'>
            <span>wesprzyj</span>
          </Link>
          <Link to='/' className='footer-link'>
            <span>github</span>
          </Link>
          <Link to='/' className='footer-link'>
            <span>prywatność</span>
          </Link>
          <Link to='/' className='footer-link'>
            <span>cookies</span>
          </Link>
          <Link to='/' className='footer-link'>
            <span>regulamin</span>
          </Link>
          <Link to='/' className='footer-link'>
            <span>discord</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
