import React from 'react';
import './styles/style.css';
import Navigation from './components/Navigation';
import ProgramSection from './components/ProgramSection';

function App() {
  const programs = [
    {
      id: 'CIT',
      title: 'Computer Information Technology',
      description:
        'The Computer Information Technology AS degree exposes students to applications programming, networking, systems administration, database management, information security, project management and web development.',
      specialties: ['2149B - Information Technology', '2149D - Geographic Information Systems', '2149F - Entrepreneurship'],
      manager: {
        name: 'Todd Price',
        email: 'tprice1@broward.edu',
        location: 'North Campus, Building 48 Room 201',
      },
      img: 'laptop.png'
    },
    {
      id: 'DDA',
      title: 'Data Analytics & AI',
      description:
        'The Data Analytics Associate in Science degree equips students with skills to extract insights from data, visualize them, and leverage machine learning techniques.',
      specialties: ['2208 Data Analytics'],
      manager: {
        name: 'Prof. Archila',
        email: 'farchila@broward.edu',
        location: 'Central Campus, Building 13',
      },
      img: 'graph.png'
    },
    {
      id: 'SD',
      title: 'Software Development',
      description:
        'The Software Development AS degree prepares students for application and web development. Students learn object-oriented programming, web design, and client-server scripting.',
      specialties: ['2195A - Computer Programming & Analysis', '2195B - Web Development'],
      manager: {
        name: 'Sasha Charles-Prince',
        email: 'scharle2@broward.edu',
        location: 'Central Campus, Building 13',
      },
      img: 'keyboard.png'
    },
    {
      id: 'NST',
      title: 'Network Systems Technology',
      description:
        'The Network Systems Technology AS degree prepares students for network administrators, Information Security Analysts, and cloud architect positions.',
      specialties: ['2503A - Network Administration', '2503B - Network Security/Cybersecurity', '2503C - Cloud Architecting'],
      manager: {
        name: 'Jianchang Yang',
        email: 'jyang@broward.edu',
        location: 'Central Campus, Building 13',
      },
      img: 'network.png'
    },
    {
      id: 'TPM',
      title: 'Technology Project Management',
      description:
        'The Technology Project Management AS degree prepares students for entry-level project management roles, focusing on IT-related projects.',
      specialties: ['2507A - Project Management', '2507B - Quality and Six Sigma'],
      manager: {
        name: 'Marie-Claire Pady',
        email: 'mpady@broward.edu',
        location: 'Central Campus, Building 13',
      },
      img: 'clipboard.png'
    },
  ];

  return (
    <div>
      <Navigation />
      <header>
        <h1>IT & Engineering Department</h1>
      </header>
      <main>
        <section id="home">
          <h2>IT Associates of Science Programs</h2>
          <p>Our program prepares you for the workforce or further studies, helping you succeed in today's tech-driven world. Get in touch with our program advisors today!</p>
        </section>
        
        {programs.map((program) => (
          <ProgramSection key={program.id} {...program} />
        ))}
      </main>
      <footer>
        <section id="contact">
          <h3>Contact Us</h3>
          <p>computer-science@broward.edu</p>
          <p>Central Campus: 954-201-6723</p>
          <p>North Campus: 954-201-2324</p>
          <p>Visit Us</p>
          <p>Central Campus, Building 13, 3501 Davie Road, Davie, FL 33314</p>
          <p>North Campus, Building 48, 1000 Coconut Creek Blvd., Coconut Creek, FL 33066</p>
        </section>
        <p>©2024 | Broward College does not discriminate on the basis of race, color, sex, gender, national origin, religion, age, disability, marital status, sexual orientation, gender identity, genetic information or other legally protected classification in its programs and activities.</p>
      </footer>
    </div>
  );
}

export default App;
