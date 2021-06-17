import React, {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import ItemListjson from "../../assets/ItemList.json"

const ItemDetailContainer = ()=> {
    const [item, setItem] = useState([]);
    useEffect(()=>{
        const itemObtenido = new Promise ((resolve, reject) => {
            setTimeout(()=>{
                resolve(ItemListjson)
            }, 2000);
        })
        itemObtenido.then(resultado =>{
            setItem(resultado[1])
        })
    }, []);
    
    return(
        <div>
            <ItemDetail imagen={item.imagen} nombre={item.nombre} espec1={item.espec1} espec2={item.espec2} espec3={item.espec3} espec4={item.espec4} espec5={item.espec5} talle1={item.talle1} talle2={item.talle2} talle3={item.talle3} precio={item.precio} stock={item.stock} key={item.id}/>
        </div>
    )
}

export default ItemDetailContainer