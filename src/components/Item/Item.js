import React from "react";
import "./Item.css"

const Item = ({props}) => {
    return (
        <div className="tarjeta-item">
            <img src={props.imagen} alt={props.nombre}></img>
            <p>Precio: ${props.precio}</p>
        </div>
    );
}

export default Item