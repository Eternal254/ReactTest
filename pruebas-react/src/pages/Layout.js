import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Layout.css"; // Importa el archivo CSS donde definirás los estilos

const Layout = () => {
    return (
        <div>
            <nav>
                <div className="nav-links"> {/* Agrega un contenedor para los enlaces */}
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
