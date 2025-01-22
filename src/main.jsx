import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import Resume from './components/pages/resume.jsx'; // Import your Resume component

const root = createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/resume" element={<Resume />} /> {/* Add this route */}
    </Routes>
  </Router>,
  document.getElementById('root')
);