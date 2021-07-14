import React, {useState} from "react";
import CartContext from "../context/CartContext";

const CartContextProviders = ({ defaultValue = [], children }) => {
    const [ productos, setProductos ] = useState([])
    const [ load, setLoad ] = useState(true)
    const [ cart, setCart ] = useState(defaultValue)

    function isInCart(item) {
        let product = cart.find(element => element.infoProductos.id === item.infoProductos.id)
        let isInCart = false
        console.log(product)
        return product === undefined ? (isInCart) : (isInCart = true);
    }

    function removeItem(itemId){
        const removeItem = cart.filter(prod => prod.infoProductos.id !== itemId)
        setCart(removeItem)
    }

    function clear(){
        setCart([])
    }

    function addItem(items){
        if(isInCart(items) === true){
            console.log("El Producto ya esta en el carrito")
        }
        else{
            setCart([...cart, items])
        }
    }

    function comprar(){
        alert("¡La Compra se realizó con éxito, muchas gracias por su compra!")
        setCart([])
    }

    return (
        <CartContext.Provider value={{cart, productos, addItem, removeItem, clear, comprar, load, cartSize: cart.length}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProviders
