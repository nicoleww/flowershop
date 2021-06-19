import React from 'react';
import Events from "../components/Events";
import { Link } from 'react-router-dom';

const EventsPage = () => {
    return (
        <div className="EventsPage">
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
            <Events />
        </div>
    )
}

export default EventsPage;