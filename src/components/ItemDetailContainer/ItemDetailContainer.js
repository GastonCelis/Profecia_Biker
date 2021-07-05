import React, {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import "./ItemDetailContainer.css";

const ItemDetailContainer = ()=> {
    const {id} = useParams()
    const [load, setLoad] = useState(false)
    useEffect(()=>{
        setLoad(true)
        setTimeout(()=>{
            setLoad(false)
        }, 2000);
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
                    <ItemDetail id={id} key={id}/>
                </div>
            }
        </div>
    )
}

export default ItemDetailContainer