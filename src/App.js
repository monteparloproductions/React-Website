import React from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import ITASP from './components/itasp'; 
import ITBASP from './components/itbasp'; 
import './styles/style.css';

function App() {
  return (
    <div>
      <Navigation />
      <Home /> 
      <ITASP />
      <ITBASP />
    </div>
  );
}

export default App;
