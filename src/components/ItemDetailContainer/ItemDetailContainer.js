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
            <ItemDetail porps={item} key={item.id}/>
        </div>
    )
}

export default ItemDetailContainer