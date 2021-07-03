import { Link } from "react-router-dom";
import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"

const ItemDetail = ({props}) => {
    const [item, setItem] = useState(0)
    const onAdd = (quantityToAdd)=>{
        setItem(quantityToAdd)
        alert("Se sumó " + quantityToAdd + " item/s al carrito")
    }
    
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
                        <Link to="">Ver Tabla de Talles</Link>
                    </div>
                    <p className="precio-item">Precio: ${props.precio}</p>
                    <p>Stock: {props.stock}</p>
                    <div className="contador-item-detalle">
                        {
                            item === 0 ?
                            (<ItemCount initial={1} stock={props.stock} onAdd={onAdd}/>)
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