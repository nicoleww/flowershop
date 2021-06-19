import React from 'react';
import About from "../components/About";
import { Link } from 'react-router-dom';

const AboutPage = () => {
    return (
        <div className="AboutPage">
            <nav>
                <div className="logo">
                    <Link to="/home">Flowershop</Link>
                </div>
                <div className="nav-links">
                    <Link to="/about">About Us</Link>
                    <Link to="/work">Our Work</Link>
                    <Link to="/events">Events</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </nav>
            <About />
        </div>
    )
}

export default AboutPage;