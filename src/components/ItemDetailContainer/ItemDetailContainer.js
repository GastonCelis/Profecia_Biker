import React, {useContext} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import CartContext from "../../context/CartContext";
import "./ItemDetailContainer.css";

const ItemDetailContainer = ()=> {
    const {id} = useParams() 
    const {load} = useContext(CartContext)
    
    return(
        <div>
            {
                load ?
                <div className="loader">
                    <ClimbingBoxLoader color={"#FF001F"} size={80} key={id}/>
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