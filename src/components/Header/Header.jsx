import React, { useState } from "react";
import './Header.css';

export function Hero() {
    return (
        <div className="hero">
            <img className="programName" src="/images/UXresearchImg.png" alt="Outcome-Driven UX Metrics"/>
            <img className="jared" src="/images/Jared_Spool 2.png" alt="Jared" />
            <div className="hero-paragraphs">
                <p>
                8 Hours Live with Jared Spool<br />
                8 Hours of Recorded Content<br /></p>
            </div>
        </div>
    )
}

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false); // State to track menu open/close

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Toggle the menu state
    };

    return (
        <section className="header-background" style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/square-background.png)`
        }}>
            <section className="header">
                <div>
                    <h1>Advanced Strategic UX Research</h1>
                    <p className="online-course">An Online Course with Jared Spool</p>
                    <Hero />
                </div>

            </section>
        </section>
    );
}
