import React, {useState, useEffect} from "react";
import DetalleItem from "../ItemDetail/ItemDetail";

const ObetenerItem = ()=> {
    const [item, setItem] = useState([]);
    useEffect(()=>{
        const itemObtenido = new Promise ((resolve, reject) => {
            setTimeout(()=>{
                resolve(DetalleItem)
            }, 2000);
        })
        itemObtenido.then(resultado =>{
            setItem(resultado)
        })
    }, []);
    
    return(
        <div>
            {item}
        </div>
        
    )
}

export default ObetenerItem