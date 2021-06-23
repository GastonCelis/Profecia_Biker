import React from "react";
import Item from "../Item/Item"
import { Link } from "react-router-dom";
import "./ItemList.css";


const ItemList = ({props}) => {
    return ( 
        <div className="contenedor-itemlist">
            <div className="item-box">
                <Link exact to={`/item/${props.id}`} className="nombre-item"><h2>{props.nombre}</h2></Link>
                <Link exact to={`/item/${props.id}`} className="item-imagen"><Item props={props} key={props.id}/></Link>
            </div>
        </div>
    );
}

export default ItemList;

