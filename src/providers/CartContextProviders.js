import React, {useState} from "react";
import CartContext from "../context/CartContext";

const CartContextProviders = ({ defaultValue = [], children }) => {
    const [ cart, setCart ] = useState(defaultValue)

    const [compra, setCompra] = useState(false)

    var total = 0
    cart.forEach(elemento => {
        total = (elemento.cantidad * elemento.infoProductos.precio) + total
    });

    const botonCompra = ()=>{
        if (total !== 0){
            setCompra(true)
        }
    }

    function isInCart(item) {
        let product = cart.find(element => element.infoProductos.id === item.infoProductos.id)
        let isInCart = false
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


    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clear, compra, setCompra, botonCompra, total,  cartSize: cart.length}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProviders
