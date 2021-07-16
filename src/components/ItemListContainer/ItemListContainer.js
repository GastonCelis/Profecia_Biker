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
        <> 
            {
                load ?
                    <div className="container-loader">
                        <ClimbingBoxLoader color={"#FF001F"} size={80} key={id}/>
                    </div>
                :
                <>
                    <header className="container">
                        <h1 className="titulo">BIENVENIDO BIKER</h1>
                    </header>
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
                </>
            }
        </>
    )
}

export default ItemListContainer;
