import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import CartContext from "../../context/CartContext";
import "./CartWidget.css";

const CartWidget = () => {
    const {cartSize} = useContext(CartContext)
    
    return (
        <NavLink activeClassName="activo" exact to="/cart" className="carrito">
            <i className="bi bi-cart"></i>{cartSize === 0 ? (<span></span>) : (<span className="cantidad">{cartSize}</span>)}
        </NavLink >
    );
}

export default CartWidget;