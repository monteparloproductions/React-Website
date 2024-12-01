import React, { useState, useEffect } from 'react';
import banner from '../assets/banner.png';

function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <section id="home">
        <h1>IT & Engineering Department</h1>
        <img
          id="banner"
          src={banner}
          alt="Banner"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        />
      </section>
      
      <section id="mission">
        <h2>Start Your Journey at Broward College</h2>
        <p>
        We have options for every type of student. Broward College named one of the top 10 community colleges in the nation by the Aspen Institute. In September 2022, U.S. News & World Report named Broward College number one in Least Debt Acquired by Students in Southern Regional Colleges.
        </p>
      </section>
    </div>
  );
}

export default Home;
