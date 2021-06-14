import React, {useState, useEfefect} from "react";

const Item = (imagen, nombre, precio, stock, id) => {
    return (
        <div>
            <img sfc={imagen}></img>
            <h3>Producto: {nombre}</h3>
            <p>Precio: {precio}</p>
            <p>Stock: {stock}</p>
        </div>
    );
}

export default Item