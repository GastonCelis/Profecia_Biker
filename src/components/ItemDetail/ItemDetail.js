import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount"
import CartContext from "../../context/CartContext";
import "./ItemDetail.css"

const ItemDetail = ({id}) => {
    const [cantidad, setCantidad] = useState(0)
    const {addItem, productos} = useContext(CartContext)
    const infoProductos = {id: productos[id].id, nombre: productos[id].nombre, precio: productos[id].precio, imagen: productos[id].imagen, stock: productos[id].stock}
    
    const onAdd = (quantityToAdd)=>{
        setCantidad(parseInt(quantityToAdd))
        addItem({ cantidad: quantityToAdd, infoProductos})
    }
    
    return (
        <div className="contenedor-padre-item-detalle">
            <div className="contenedor-item-detalle">
                <div className="imagen-item">
                    <img src={productos[id].imagen} alt={productos[id].nombre}></img>
                </div>
                <h3>{productos[id].nombre}</h3>
                <div>
                    <ul>
                        <li>{productos[id].detalle1}</li>
                        <li>{productos[id].detalle2}</li>
                        <li>{productos[id].detalle3}</li>
                        <li>{productos[id].detalle4}</li>
                        <li>{productos[id].detalle5}</li>
                    </ul>
                    <div className="seccion-talles">
                        <label>Talles</label>
                        <div>
                            <button className="boton-talle">{productos[id].talle1}</button><button className="boton-talle">{productos[id].talle2}</button><button className="boton-talle">{productos[id].talle3}</button>
                        </div>
                        <Link to="#">Ver Tabla de Talles</Link>
                    </div>
                    <p className="precio-item">Precio: ${productos[id].precio}</p>
                    <p>Stock: {productos[id].stock}</p>
                    <div className="contador-item-detalle">
                        {
                            cantidad === 0 ?
                            (<ItemCount initial={1} stock={productos[id].stock} onAdd={onAdd} key={id}/>)
                            :
                            (<Link exact to={"/cart"}><button className="boton-terminar-compra">Terminar Compra</button></Link>)
                        }
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default ItemDetail;