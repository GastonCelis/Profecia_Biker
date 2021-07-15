import React, {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import {getFirestore} from "../../factory/Firebase"
import "./ItemDetailContainer.css";

const ItemDetailContainer = ()=> {
    const {id} = useParams() 
    const [load, setLoad] = useState(true)
    const [producto, setProducto] = useState([]);
    useEffect(()=>{
        const db = getFirestore();
        const itemCollection = db.collection("items")
        itemCollection.get().then((querySnapshot)=>{
            if(querySnapshot.size === 0){
                console.log("No hay resultados");
                setLoad(false);
            }
            setProducto(querySnapshot.docs.map(doc => doc.data()));
            setLoad(false);
        })
    }, []);
    
    return(
        <div>
            {
                load ?
                <div className="loader">
                    <ClimbingBoxLoader color={"#FF001F"} size={80} key={id}/>
                </div>
                :
                <div>
                    <ItemDetail id={id} productos={producto} key={id}/>
                </div>
            }
        </div>
    )
}

export default ItemDetailContainer