import React from "react";
import ItemCount from "../ItemCount/ItemCount"
import Item from "../Item/Item"
import { Link } from "react-router-dom";
import "./ItemList.css";


const ItemList = ({props}) => {
    return ( 
        <div className="contenedor-itemlist">
            <div className="item-box">
                <Link exact to={`/item/${props.id}`} className="nombre-item"><h2>{props.nombre}</h2></Link>
                <Item props={props} key={props.id}/>
                <ItemCount initial={1} stock={props.stock}/>
            </div>
        </div>
    );
}

export default ItemList;

