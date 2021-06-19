import React from 'react';
import Home from "../components/Home";
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="HomePage">
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
            <Home />
        </div>
    )
}

export default HomePage;