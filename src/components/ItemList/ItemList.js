import React, {useState, useEffect} from "react";
import ItemListjson from "../../assets/informacion/ItemList.json"
import ItemCount from "../ItemCount/ItemCount"
import Item from "../Item/Item"
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { Link } from "react-router-dom";
import "./ItemList.css"

const ItemList = () => {
    const [producto, setProducto] = useState([]);
    const [load, setLoad] = useState(false)
    useEffect(()=>{
        setLoad(true)
        setTimeout(()=>{
            setLoad(false)
        }, 2001)
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
            {
                load ?
                    <div className="loader">
                        <ClimbingBoxLoader color={"#FF001F"} size={80}/>
                    </div>
                :

                <div className="item-box-padre">
                    {producto.map(elemento =>{
                        return(
                            <div className="item-box">
                                <Link exact to={`/item/${elemento.id}`} className="nombre-item"><h2>{elemento.nombre}</h2></Link>
                                <Item props={elemento} key={elemento.id}/>
                                <ItemCount initial={1} stock={elemento.stock}/>
                            </div>
                        )
                    })}
                </div>
            }
        </div>
        
        
    )
}

export default ItemList;

