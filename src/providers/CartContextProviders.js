import React, {useState} from "react";
import CartContext from "../context/CartContext";
import ItemListjson from "../assets/informacion/ItemList.json"

export default function CartContextProvider ({defaultValue=[], children}){
    const [cart, setCart] = useState(defaultValue)
    
    function getItem(id){
        return cart.find(x => x.id === id)
    }
    
    function removeItem (itemId){
        cart.map(elemento =>{
            elemento.itemId.remove()
        })
    }

    function clear(){
        setCart([])
    } 

    function isInCart ({id}){
        return id === undefined ? undefined : getItem(id) !== undefined
    }

    function addItem (item, quantity){
        if (isInCart(item)){
            console.log("El producto ya esta en el carrito")
            return
        }
        setCart([...cart, item, quantity])
        console.log("Se agrego: " + item + "cantidad: " + quantity)
    }

    return(
        <CartContext.Provider value={{cart, getItem, removeItem, isInCart, clear, addItem, cartSize: cart.length}}>
            {children}
        </CartContext.Provider>
    )

}