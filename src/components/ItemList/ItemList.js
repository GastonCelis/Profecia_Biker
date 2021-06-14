import React, {useState, useEffect} from "react";
import ItemListjson from "./ItemList.json"
import Item from "../Item/Item"

const ItemList = () => {
    const [producto, setProducto] = useState([]);
    useEffect(()=>{
        const item = new Promise((resolve, reject) => {
            setTimeout(()=> {
                resolve(ItemListjson)
            }, 2000);
        })
        item.then(resultado =>{
            setProducto(resultado)
        })
    }, []);

    return (
        <div>
            {producto.map(elemento =>{
                return(
                    <Item imagen={elemento.imagen} nombre={elemento.nombre} precio={elemento.precio} stock={elemento.stock} key={elemento.id}/>
                )
            })}
        </div>
        
    )
}

export default ItemList;

