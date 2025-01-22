import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/navbar';
import { Home, About, Portfolio, Contact, Resume } from './components/pages';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [content, setContent] = useState('Content 1');

  const handleClick = () => {
    setContent(content === 'Content 1' ? 'Content 2' : 'Content 1');
  };

  return (
    <Router>
      <Navbar />
      <button onClick={handleClick}>Toggle Content</button>
      <div>{content}</div>
      <nav>
        <ul>
          <li className="nav-links">
            <Link to="/">About</Link>
          </li>
          <li className="nav-links">
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className="nav-links">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="nav-links">
            <Link to="/resume">Resume</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;