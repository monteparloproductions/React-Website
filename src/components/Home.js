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
  );
}

export default Home;
