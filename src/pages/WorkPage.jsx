import React from 'react';
import Work from "../components/Work";
import { Link } from 'react-router-dom';

const WorkPage = () => {
    return (
        <div className="WorkPage">
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
            <Work />
        </div>
    )
}

export default WorkPage;