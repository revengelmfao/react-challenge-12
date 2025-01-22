import React from "react";

export default function Resume() {
  const handleResumeClick = () => {
    console.log("Resume button clicked");
  };

  return (
    <div>
      <div class="brad-port-position">
        <h1>Portfolio</h1>
        <nav>
          <ul>
            <li class="nav-links">
              <a href="/index.html">About</a>
            </li>
            <li class="nav-links">
              <a href="./portfolio.html">Portfolio</a>
            </li>
            <li class="nav-links">
              <a href="/contact">Contact</a>
            </li>
            <li class="nav-links">
              <a href="./resume.html" onClick={handleResumeClick}>Resume</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="about-me">
        <img class="icons" src="../src/assets/imgs/portfolio-icon.svg" alt="about-me icon" />
        <h2>Resume</h2>
        <p class="aboutme-desc">
          As a Full-Stack developer, I have experience with a variety of technologies and tools.
          Below is a summary of my skills and experiences.
        </p>
        <div class="aboutme-desc">
          <h3>Front-End</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>pgAdmin</li>
          </ul>
        </div>
        <div class="aboutme-desc">
          <h3>Back-End</h3>
          <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>Insomnia</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
