import React, {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import ItemListjson from "../../assets/informacion/ItemList.json"
import { useParams } from "react-router-dom";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import "./ItemDetailContainer.css";

const ItemDetailContainer = ()=> {
    const {id} = useParams()
    const [item, setItem] = useState([]);
    const [load, setLoad] = useState(false)
    useEffect(()=>{
        setLoad(true)
        const itemObtenido = new Promise ((resolve, reject) => {
            setTimeout(()=>{
                resolve(ItemListjson)
                setLoad(false)
            }, 2000);
        })
        itemObtenido.then(resultado =>{
            setItem(resultado[`${id}`])
        })
    }, [id]);
    
    return(
        <div>
            {
                load ?
                <div className="loader">
                    <ClimbingBoxLoader color={"#FF001F"} size={80}/>
                </div>
                :
                <div>
                    <ItemDetail props={item} key={item.id}/>
                </div>
            }
        </div>
    )
}

export default ItemDetailContainer