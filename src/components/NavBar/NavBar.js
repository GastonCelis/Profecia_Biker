import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from "../../assets/imagenes/logoprofeciabiker.png";
import CartWidget from "../CartWidget/CartWidget.js";


const NavBar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light container">
            <Link className="navbar-brand" exact to={"/"}><img src={logo} alt="Logo Profecia Biker" className="img-fluid"></img></Link>
            <CartWidget/>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse sub-menu" id="navbarNavDropdown">
                <div className="navbar-nav">
                        <NavLink exact to={"/"} activeClassName="activo" className="nav-item nav-link">Inicio</NavLink>
                    <div className="nav-item dropdown">
                        <NavLink exact to={"/expanded"} activeClassName="activo" className="nav-item nav-link dropdown-toggle"  id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Tienda
                        </NavLink>
                        <div className="dropdown-menu menu-desplegable" aria-labelledby="navbarDropdownMenuLink">
                            <NavLink exact to={"/category/:id"} activeClassName="activo" className="dropdown-item">Cascos</NavLink>
                            <NavLink exact to={"/category/:id"} activeClassName="activo" className="dropdown-item" >Indumentaria</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;