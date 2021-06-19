import React from 'react';
import Contact from "../components/Contact";
import { Link } from 'react-router-dom';

const ContactPage = () => {
    return (
        <div className="ContactPage">
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
            <Contact />
        </div>
    )
}

export default ContactPage;