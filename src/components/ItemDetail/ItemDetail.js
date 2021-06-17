import React from "react";
import "./ItemDetail.css"

const ItemDetail = ({imagen, nombre, espec1, espec2, espec3, espec4, espec5, talle1, talle2, talle3, precio, stock}) => {
    return (
        <div className="contenedor-item-detalle">
            <div className="imagen-item">
                <img src={imagen} alt={nombre}></img>
            </div>
            <h3>{nombre}</h3>
            <div>
                <ul>
                    <li>{espec1}</li>
                    <li>{espec2}</li>
                    <li>{espec3}</li>
                    <li>{espec4}</li>
                    <li>{espec5}</li>
                </ul>
                <div>
                    <label>Talles</label>
                    <div>
                        <button>{talle1}</button><button>{talle2}</button><button>{talle3}</button>
                    </div>
                    <a href="#">Ver Tabla de Talles</a>
                </div>
                <p className="precio-item">Precio: ${precio}</p>
                <p>Stock: {stock}</p>
                <div className="boton-carrito">
                    <button>Agregar al Carrito</button>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;