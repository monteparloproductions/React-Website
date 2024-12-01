import React from 'react';
import laptop from '../assets/laptop.png';
import graph from '../assets/graph.png';
import keyboard from '../assets/keyboard.png';
import network from '../assets/network.png';
import clipboard from '../assets/clipboard.png';


function ITASP() {
  return (
    <section id="itasp">
      <h2>IT Associates of Science Programs</h2>
      <p>
        Our program prepares you for the workforce or further studies, helping you succeed in today's tech-driven world. Get in touch with our program advisors today!
      </p>

      <div id="CIT">
        <h3>Computer Information Technology</h3>
        <img src={laptop} alt="laptop" />
        <p>
          The Computer Information Technology AS degree exposes students to applications programming, networking, systems administration, database management, information security, project management, and web development. View the different specializations here:
        </p>
        <ul>
          <li>2149B - Information Technology</li>
          <li>2149D - Geographic Information Systems</li>
          <li>2149F - Entrepreneurship</li>
        </ul>
        <h4>Program Manager</h4>
        <p>
          Todd Price
          <br />
          <a href="mailto:tprice1@broward.edu">tprice1@broward.edu</a>
          <br />
          North Campus, Building 48 Room 201
        </p>
      </div>

      <div id="dda">
        <h3>Data Analytics & AI</h3>
        <img src={graph} alt="graph" />
        <p>
          The Data Analytics Associate in Science degree (AS 2208) equips students with the skills to extract valuable insights from data, translate them into compelling visuals, and leverage machine learning techniques for informed decision-making.
        </p>
        <ul>
          <li>2208 Data Analytics</li>
        </ul>
        <h4>Program Manager</h4>
        <p>
          Prof. Archila
          <br />
          <a href="mailto:farchila@broward.edu">farchila@broward.edu</a>
          <br />
          Central Campus, Building 13
        </p>
      </div>

      <div id="sd">
        <h3>Software Development</h3>
        <img src={keyboard} alt="keyboard" />
        <p>
          The Software Development AS degree is designed to prepare students for the dynamic world of application and web development. Students will use current technology to learn procedural and object-oriented programming as well as web design including client-side and server-side scripting. View the different specializations here:
        </p>
        <ul>
          <li>2195A - Computer Programming & Analysis</li>
          <li>2195B - Web Development</li>
        </ul>
        <h4>Program Manager</h4>
        <p>
          Sasha Charles-Prince
          <br />
          <a href="mailto:scharle2@broward.edu">scharle2@broward.edu</a>
          <br />
          Central Campus, Building 13
        </p>
      </div>

      <div id="nst">
        <h3>Network Systems Technology</h3>
        <img src={network} alt="network" />
        <p>
          The Network Systems Technology AS degree prepares students for employment opportunities as network administrators, Information Security Analysts, and cloud architects. View the different specializations here:
        </p>
        <ul>
          <li>2503A - Network Administration</li>
          <li>2503B - Network Security/Cybersecurity</li>
          <li>2503C - Cloud Architecting</li>
        </ul>
        <h4>Program Manager</h4>
        <p>
          Jianchang Yang
          <br />
          <a href="mailto:jyang@broward.edu">jyang@broward.edu</a>
          <br />
          Central Campus, Building 13
        </p>
      </div>

      <div id="tpm">
        <h3>Technology Project Management</h3>
        <img src={clipboard} alt="clipboard" />
        <p>
          The Technology Project Management AS degree prepares students for employment opportunities as entry-level project management professionals. It is designed for students seeking the skill set needed to be successful in their careers as supervisors, managers, and project leaders, especially in the field of Information Technology. View the different specializations here:
        </p>
        <ul>
          <li>2507A - Project Management</li>
          <li>2507B - Quality and Six Sigma</li>
        </ul>
        <h4>Program Manager</h4>
        <p>
          Marie-Claire Pady
          <br />
          <a href="mailto:mpady@broward.edu">mpady@broward.edu</a>
          <br />
          Central Campus, Building 13
        </p>
      </div>
    </section>
  );
}

export default ITASP;
