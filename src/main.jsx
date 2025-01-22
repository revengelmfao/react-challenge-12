import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import Resume from './components/pages/resume.jsx'; // Import your Resume component

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/resume" element={<Resume />} /> {/* Add this route */}
    </Routes>
  </Router>,
  document.getElementById('root')
);