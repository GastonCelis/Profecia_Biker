import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount"
import CartContext from "../../context/CartContext";
import "./ItemDetail.css"

const ItemDetail = ({id}) => {
    const [cantidad, setCantidad] = useState(0)
    const {cart, setCart, items} = useContext(CartContext)
    const onAdd = (quantityToAdd)=>{
        setCantidad(parseInt(quantityToAdd))
        setCart(( parseInt(quantityToAdd) + items[id]) + cart)
        alert("Se sumó " + quantityToAdd + " item/s al carrito")
    }
    
    console.log(items[id])

    return (
        <div className="contenedor-padre-item-detalle">
            <div className="contenedor-item-detalle">
                <div className="imagen-item">
                    <img src={items[id].imagen} alt={items[id].nombre}></img>
                </div>
                <h3>{items[id].nombre}</h3>
                <div>
                    <ul>
                        <li>{items[id].espec1}</li>
                        <li>{items[id].espec2}</li>
                        <li>{items[id].espec3}</li>
                        <li>{items[id].espec4}</li>
                        <li>{items[id].espec5}</li>
                    </ul>
                    <div className="seccion-talles">
                        <label>Talles</label>
                        <div>
                            <button className="boton-talle">{items[id].talle1}</button><button className="boton-talle">{items[id].talle2}</button><button className="boton-talle">{items[id].talle3}</button>
                        </div>
                        <Link to="">Ver Tabla de Talles</Link>
                    </div>
                    <p className="precio-item">Precio: ${items[id].precio}</p>
                    <p>Stock: {items[id].stock}</p>
                    <div className="contador-item-detalle">
                        {
                            cantidad === 0 ?
                            (<ItemCount initial={1} stock={items[id].stock} onAdd={onAdd}/>)
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