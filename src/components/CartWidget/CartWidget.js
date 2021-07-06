import React, {useContext} from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import "./CartWidget.css";

const CartWidget = () => {
    const {cartSize} = useContext(CartContext)
    return (
        <Link exact to="/cart" className="carrito">
            <i className="bi bi-cart"></i><span className="cantidad">{cartSize}</span>
        </Link>
    );
}

export default CartWidget;