import React from "react";
import ItemCount from "../ItemCount/ItemCount";

import "./ItemListContainer.css";


const ItemListContainer = () => {
    return ( 
        <div className="contenedor-itemlist">
            <h1 className="titulo">Bienvenid@ Biker</h1>

            <ItemCount initial={1} stock={20}/>
        </div>
    );
}

export default ItemListContainer;