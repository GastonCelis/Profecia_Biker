import React from "react";
import "./NavBar.css";
import logo from "./logoprofeciabiker.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import CartWidget from "../CartWidget/CartWidget.js";


const NavBar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#"><img src={logo} alt="Logo Profecia Biker"></img></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse sub-menu" id="navbarNavDropdown">
                <div className="navbar-nav">
                        <a className="nav-item active nav-link disabled" aria-current="page" href="#">Inicio</a>
                        <a className="nav-item active nav-link" href="#">Nosotros</a>
                        <a className="nav-item active nav-link" href="#">Contacto</a>
                    <div className="nav-item dropdown">
                        <a className="nav-item active nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Tienda
                        </a>
                        <div className="dropdown-menu menu-desplegable" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="#">Cascos</a>
                            <a className="dropdown-item" href="#">Indumentaria</a>
                            <a className="dropdown-item" href="#">Repuestos</a>
                            <a className="dropdown-item" href="#">Accesorios</a>
                        </div>
                    </div>
                </div>
            </div>

            <CartWidget/>
        </nav>
    );
}

export default NavBar;