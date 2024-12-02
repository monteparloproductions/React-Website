import React from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import ITASP from './components/itasp'; 
import ITBASP from './components/itbasp'; 
import Button from './components/Button'; 
import Contact from './components/Contact'; 
import Footer from './components/Footer'; 
import Faculty from './components/Faculty';
import './styles/style.css';




function App() {
  return (
    <div>
      <Navigation />
      <Home /> 
      <ITASP />
      <ITBASP />
      <Faculty />
      <Button />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
