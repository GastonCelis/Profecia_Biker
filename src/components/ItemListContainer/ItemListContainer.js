import React from "react";
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css";


const ItemListContainer = () => {
    return ( 
        <div className="contenedor-itemlist">
            <h1 className="titulo">Bienvenid@ Biker</h1>
            <ItemList/>
        </div>
    );
}

export default ItemListContainer;