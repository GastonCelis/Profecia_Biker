import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css";


const ItemListContainer = () => {

    const onAdd = ()=> {
        alert("Se agregó/aron item/s al carrito")
        
    }

    return ( 
        <div className="contenedor-itemlist">
            <h1 className="titulo">Bienvenid@ Biker</h1>

            <ItemCount initial={1} stock={20} onAdd={onAdd}/>

            <ItemList/>
        </div>
    );
}

export default ItemListContainer;