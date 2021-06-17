import React from "react";
import "./ItemDetail.css"

const ItemDetail = ({porps}) => {
    return (
        <div className="contenedor-item-detalle">
            <div className="imagen-item">
                <img src={porps.imagen} alt={porps.nombre}></img>
            </div>
            <h3>{porps.nombre}</h3>
            <div>
                <ul>
                    <li>{porps.espec1}</li>
                    <li>{porps.espec2}</li>
                    <li>{porps.espec3}</li>
                    <li>{porps.espec4}</li>
                    <li>{porps.espec5}</li>
                </ul>
                <div>
                    <label>Talles</label>
                    <div>
                        <button>{porps.talle1}</button><button>{porps.talle2}</button><button>{porps.talle3}</button>
                    </div>
                    <a href="#">Ver Tabla de Talles</a>
                </div>
                <p className="precio-item">Precio: ${porps.precio}</p>
                <p>Stock: {porps.stock}</p>
                <div className="boton-carrito">
                    <button>Agregar al Carrito</button>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;