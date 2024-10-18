import React, { useState} from "react";
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
// import Landing from '../Landing/Landing'


export function Hero() {
    return (
        <section className="hero" style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/square-background.png)`
        }}>

        <div className="hero">
            <img src="/images/Jared_Spool 2.png" alt="Jared" />
            <div className="hero-paragraphs">
                <p>Small Group Coaching</p>
                <p>8 Hours Live with Jared Spool <br />8 hours of Recorded Content</p>
            </div>
        </div>
        </section>
    )
}


export default function Header() {

    const location = useLocation(); // Hook to get the current route
    return (


        <section className="header-background" style={{
            backgroundImage: `url(${process.env.PUBLIC_URL} /images/square - background.png)`
        }}>
                <nav className="header-nav">
                    <img className="header-logo" src="/images/Center_Centre_Logo.png" alt="center centre logo" />
                    <div className="header-links">
                        <Link to="/topics">Course Topics</Link>
                        <Link to="/outcomes">Why UX Outcomes?</Link>
                        <Link to="/october">Course Dates</Link>
                        <Link to="/teams">Sign Up Your Team</Link>
                    </div>
                </nav>
            <section className="header" >
                <div>
                    <h1>Outcome-Driven UX Metrics</h1>
                    <p className="online-course">An Online Course with Jared Spool</p>
                </div>
                {/* Only render Hero if the current route is the home page ("/") */}
                {location.pathname === '/' && < Hero/>}

            </section>
        </section>
    );
}

