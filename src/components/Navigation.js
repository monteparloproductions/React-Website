import React from 'react';
import logo from '../assets/logo.png';

function Navigation() {
  return (
    <nav id="navigation">
      <a href="#mission">About Us</a>
      <a href="#itasp">Programs</a>
      <a href="/">
      <img src={logo} alt="Logo" width="250px" />
      </a>
      <a href="#Faculty">Faculty</a>
      <a href="#contact">Contact</a>
    </nav>
  );
}

export default Navigation;
