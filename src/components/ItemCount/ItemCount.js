import React, { useState } from 'react';
import "./ItemCount.css"

const ItemCount = ({initial, stock, onAdd}) => {
    const [item, setItem] = useState(initial)

    const moreItem = ()=> {
        item < stock ? setItem(item + 1) : alert("No hay Mas Stock")
    }

    const lessItem = ()=> {
        item > initial ? setItem(item - 1) : alert("No puedes seleccionar menos Items")
    }

    return (
        <div className="contenedor-contador">
            <div className="items">
                <i className="bi bi-arrow-left-square" onClick={lessItem}></i>
                <span>{item}</span>
                <i className="bi bi-arrow-right-square" onClick={moreItem}></i>
            </div>
            <button onClick={()=>onAdd(item)}>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount


