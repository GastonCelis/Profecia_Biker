import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./ItemCount.css"

const ItemCount = ({initial, stock}) => {
    const [item, setItem] = useState(initial) 

    const addItem = ()=> {
        item < stock ? setItem(item + 1) : alert("No hay Mas Stock")
        
    }

    const removeItem = ()=> {
        item > initial ? setItem(item - 1) : alert("No puedes seleccionar menos Items")
        
    }

    const cart = ()=> {
        alert("Se agregó " + item +" item/s al carrito")
        
    }

    return (
        <div className="contenedor-contador">
            <h5>CONTADOR DE ITEMS</h5>
            <div className="items">
                <i className="bi bi-arrow-left-square" onClick={removeItem}></i>
                <span>{item}</span>
                <i className="bi bi-arrow-right-square" onClick={addItem}></i>
            </div>
            <button onClick={cart}>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount

