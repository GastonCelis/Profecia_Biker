import React, {useState, useEffect} from "react";
import ItemListjson from "../../assets/informacion/ItemList.json"
import ItemList from "../ItemList/ItemList"
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import "./ItemListContainer.css"
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const {id} = useParams()
    const [producto, setProducto] = useState([]);
    const [load, setLoad] = useState(false)
    useEffect(()=>{
        setLoad(true)
        const item = new Promise((resolve, reject) => {
            setTimeout(()=> {
                resolve(ItemListjson)
            }, 2000);
        })
        item.then(resultado =>{
            setProducto(resultado)
            setLoad(false)
        })
    }, []);

    return (
        <div>
            <h1 className="titulo">Bienvenid@ Biker</h1>
            {
                load ?
                    <div className="loader">
                        <ClimbingBoxLoader color={"#FF001F"} size={80}/>
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
