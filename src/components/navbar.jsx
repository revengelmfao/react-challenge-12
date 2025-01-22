import { Link } from "react-router-dom"
import React from "react"

export const Navbar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>            
            <ul>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/resume">Resume</Link>
                </li>
            </ul>
        </nav>
    );
};  