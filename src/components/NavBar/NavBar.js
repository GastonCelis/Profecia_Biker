import React from "react";
import  "./NavBar.css";
import logo from "./logoprofeciabiker.png";

const NavBar = () => {
    return ( 
        <header className="encabezado">
            <img src={logo}></img>
            <h1 className="titulo">
                <span>Profecía</span>
                <span>Biker</span>
            </h1>
            <nav className="menu">
                <a href="#"><p>Cascos</p></a>
                <a href="#"><p>Indumentaria</p></a>
                <a href="#"><p>Repuestos</p></a>
                <a href="#"><p>Accesorios</p></a>
                <a href="#"><p>Nosotros</p></a>
                <a href="#"><p>Contacto</p></a>
            </nav>
        </header>
    );
}

export default NavBar;