import React from "react";
import { Link } from "react-router-dom";
import "./CartWidget.css";



const CartWidget = () => {
    return (
        <Link to="" className="carrito">
            <i className="bi bi-cart"></i>
        </Link>
    );
}

export default CartWidget;