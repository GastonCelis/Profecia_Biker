import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList"
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import {getFirestore} from "../../factory/Firebase"
import "./ItemListContainer.css"


const ItemListContainer = () => {
    const {id} = useParams()
    const [producto, setProducto] = useState([]);
    const [load, setLoad] = useState(true)
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

    return (
        <div>
            <h1 className="titulo">Bienvenid@ Biker</h1>
            {
                load ?
                    <div className="loader">
                        <ClimbingBoxLoader color={"#FF001F"} size={80} key={id}/>
                    </div>
                :

                <div className="item-box-padre">
                    {producto.map(elemento =>{
                        if (elemento.categoria === id){
                            return(
                                <div>
                                    <ItemList props={elemento} key={elemento.id}/>
                                </div>
                            )
                        }
                        else if (id === undefined){
                            return(
                                <div>
                                    <ItemList props={elemento} key={elemento.id}/>
                                </div>
                            )
                        }
                    })}
                </div>
            }
        </div>
    )
}

export default ItemListContainer;
