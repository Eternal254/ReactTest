// Layout.js
import React from "react";
import { Outlet, Link } from "react-router-dom";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Layout.css"; 

const Layout = () => {
    return (
        <div>
            <nav>
                <div className="nav-links">
                    <Link to="/" className="nav-button">Home</Link>
                    <Link to="/about" className="nav-button">About</Link>
                    <Link to="/dashboard" className="nav-button">Bestiario</Link>
                </div>
            </nav>
            <hr />
            <Outlet />
        </div>
    );
}

export default Layout;
