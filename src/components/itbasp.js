import React from 'react';
import laptop from '../assets/laptop.png';
import graph from '../assets/graph.png';

function ITBASP() {
  return (
    <section id="itbasp">
      <h2>IT Bachelors of Applied Science Programs</h2>
      <p>
        Getting your BAS in IT is easily affordable here, and your choice will pay off once you land your first IT gig. You can begin and finish your bachelor's in IT in just four years, or two if you are already a Broward College student with your associate's degree. Get in touch with our program advisors today!
      </p>

      <div className="program-grid">
        <div className="program-card" id="CIT">
          <h3>Computer Information Technology</h3>
          <img src={laptop} alt="laptop" />
          <p>Students completing the BAS in Information Technology program will have the skills and knowledge required to become successful Information Technology Professionals and Leaders.</p>
          <ul>
            <li>T300A - Network Systems Analyst</li>
            <li>T300C - Cybersecurity and Ethical Hacking</li>
            <li>T300D - Web Development</li>
            <li>T300E - Project Management</li>
            <li>T300F - Immersive Technologies</li>
          </ul>
          <h4>Program Manager</h4>
          <p>
            Nadine Blackwood
            <br />
            <a href="mailto:nblackwo@broward.edu">nblackwo@broward.edu</a>
            <br />
            North Campus, Building 48
          </p>
        </div>

        <div className="program-card" id="dda">
          <h3>Data Analytics & AI</h3>
          <img src={graph} alt="graph" />
          <p>The Data Analytics & AI BAS (T200 Program Code) equips students with the skills to extract valuable insights from data, translate them into compelling visuals, and leverage machine learning techniques for informed decision-making.</p>
          <ul>
            <li>T200 - Data Analytics & AI</li>
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
      </div>
    </section>
  );
}

export default ITBASP;
