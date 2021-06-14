import React from "react";
import "./Item.css"

const Item = ({imagen, nombre, precio, stock, id}) => {
    return (
        <div className="tarjeta-item">
            <img src={imagen} alt={nombre}></img>
            <h3>{nombre}</h3>
            <p>Precio: ${precio}</p>
            <p>Stock: {stock}</p>
        </div>
    );
}

export default Item