import { createRoot } from 'react-dom/client';

function NavigationBar() {
  // TODO: Actually implement a navigation bar
  return <h1>Hello from React!</h1>;
}

const domNode = document.getElementById('navigation');
const root = createRoot(domNode);
root.render(<NavigationBar />);




// src/App.js
import React from 'react';
function App() {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
}
export default App;

/* src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(   
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/


// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route   


 path="/about" element={<About />} />
      </Routes>
    </Router>   

  );
}

