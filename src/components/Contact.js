import React from 'react';
import facebook from '../assets/facebook.png';
import youtube from '../assets/youtube.png';
import twitter from '../assets/twitter.png';
import linkedin from '../assets/linkedin.png';
import instagram from '../assets/instagram.png';

function Contact() {
return (
    <section id="contact">
      <h2>Contact Us</h2>

      <div className="contact-info">
        <div>
          <h3>Email</h3>
          <p>computer-science@broward.edu</p>
        </div>

        <div>
          <h3>Phone Numbers</h3>
          <p>Central Campus: 954-201-6723</p>
          <p>North Campus: 954-201-2324</p>
        </div>

        <div>
          <h3>Visit Us</h3>
          <p>Central Campus, Building 13, 3501 Davie Road, Davie, FL 33314</p>
          <p>North Campus, Building 48, 1000 Coconut Creek Blvd., Coconut Creek, FL 33066</p>
        </div>

        <div id="links">
          <h3>Follow Us</h3>
          <div className="social-media-links">
            <a href="https://www.facebook.com/BCTechAdvantage/" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="https://www.youtube.com/@browardcollegecsit6839" target="_blank" rel="noopener noreferrer">
              <img src={youtube} alt="youtube" />
            </a>
            <a href="https://x.com/BCTechAdvantage" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="twitter" />
            </a>
            <a href="https://www.linkedin.com/company/bctechadvantage/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="linkedin" />
            </a>
            <a href="https://www.instagram.com/bctechadvantage/" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="instagram" />
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Contact;