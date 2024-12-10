import React, { useState } from "react";
import { Link } from 'react-router-dom';

// All CSS FOR Navbar currently lives in the Header.css
export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false); // State to track menu open/close

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Toggle the menu state
    };

    return (
        <section className="header">
            <div className="new-nav-test">
                <nav className="header-nav">
                    <img className="header-logo" src="/images/Center_Centre_Logo.png" alt="center centre logo" />

                    <div className="hamburger" onClick={toggleMenu}>

                        <img
                            src="/images/Menu.png"
                            alt="Menu"
                            className="hamburger-image"
                        />
                    </div>

                    <div className={`header-links ${menuOpen ? 'open' : ''}`}>
                        <Link to="/">Home</Link>
                        <Link to="/page1">Page 1</Link>
                        <Link to="/page2">Page 2</Link>
                        <Link to="/page3">Page 3</Link>

                        {/* UPDATE THE MONTH AFTER EACH COHORT */}
                        <Link to="/cohort3">Join Next Cohort</Link>
                        {/* UPDATE THE MONTH AFTER EACH COHORT */}
                    </div>
                </nav>
            </div>
        </section>

    )


}