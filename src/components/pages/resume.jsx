import React, { useState, useEffect } from "react";

const Resume = () => {
    const [showResume, setShowResume] = useState(false);

    useEffect(() => {
        const handleLinkClick = (event) => {
            if (event.target.id === 'resume-link') {
                setShowResume(true);
            }
        };

        document.addEventListener('click', handleLinkClick);

        return () => {
            document.removeEventListener('click', handleLinkClick);
        };
    }, []);

    return (
    <>
        <div>
            {showResume && (
                <div className="about-me">
                    <img className="icons" src="./src/assets/imgs/portfolio-icon.svg" alt="about-me icon" />
                    <h2>Resume</h2>
                    <p className="aboutme-desc">
                        As a Full-Stack developer, I have experience with a variety of technologies and tools.
                        Below is a summary of my skills and experiences.
                    </p>
                    <p className="aboutme-desc">
                        <h3>Front-End</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>pgAdmin</li>
                        </ul>
                    </p>
                    <p className="aboutme-desc">
                        <h3>Back-End</h3>
                        <ul>
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>Insomnia</li>
                            <li>PostgreSQL</li>
                        </ul>
                    </p>
                </div>
            )}
        </div>
        <div id="root"></div>
        <script type="module" src="/src/main.jsx"></script>
    </>
    );
};

export default Resume;