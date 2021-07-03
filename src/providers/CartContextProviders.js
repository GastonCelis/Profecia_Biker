import React, {useState} from "react";
import CartContext from "../context/CartContext";
import ItemListjson from "../assets/informacion/ItemList.json"

const productos = ItemListjson

const CartContextProviders = ({ children }) => {
    const [ items, setItems] = useState(productos)
    const [ cart, setCart ] = useState([])

    function removeItem(ItemId){
        
    }

    function isnItem(){}

    return (
        <CartContext.Provider value={{cart, setCart, items, setItems}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProviders
