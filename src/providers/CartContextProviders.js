import React, {useState} from "react";
import CartContext from "../context/CartContext";
import ItemListjson from "../assets/informacion/ItemList.json"

const productos = ItemListjson

const CartContextProviders = ({ children }) => {
    const [ items, setItems] = useState(productos)
    const [ cart, setCart ] = useState({})

    function removeItem(itemId){
        const removeItem = cart.filter(prod => prod.id !== itemId)
        setCart(removeItem)
    }

    function cleanCart(){
        setCart([])
    }

    function isnItem(){

    }

    return (
        <CartContext.Provider value={{cart, setCart, items, setItems, removeItem, cleanCart, isnItem}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProviders
