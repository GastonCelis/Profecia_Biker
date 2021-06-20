import React from "react";
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"

const ItemDetail = ({props}) => {
    return (
        <div className="contenedor-padre-item-detalle">
            <div className="contenedor-item-detalle">
                <div className="imagen-item">
                    <img src={props.imagen} alt={props.nombre}></img>
                </div>
                <h3>{props.nombre}</h3>
                <div>
                    <ul>
                        <li>{props.espec1}</li>
                        <li>{props.espec2}</li>
                        <li>{props.espec3}</li>
                        <li>{props.espec4}</li>
                        <li>{props.espec5}</li>
                    </ul>
                    <div className="seccion-talles">
                        <label>Talles</label>
                        <div>
                            <button className="boton-talle">{props.talle1}</button><button className="boton-talle">{props.talle2}</button><button className="boton-talle">{props.talle3}</button>
                        </div>
                        <a href="#">Ver Tabla de Talles</a>
                    </div>
                    <p className="precio-item">Precio: ${props.precio}</p>
                    <p>Stock: {props.stock}</p>
                    <div className="contador-item-detalle">
                        <ItemCount initial={0} stock={props.stock}/>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default ItemDetail;