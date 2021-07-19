import React, {useState} from "react";
import CartContext from "../context/CartContext";
import Swal from "sweetalert2/src/sweetalert2.js"

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
        Swal.fire({
                title: '¿Desa eliminar este item del carrito?',
                icon: "question",
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
                showDenyButton: true,
                confirmButtonText: `SI`,
                denyButtonText: `NO`,
                }).then((result) => {
                    if (result.isConfirmed) {
                        const removeItem = cart.filter(prod => prod.infoProductos.id !== itemId)
                        setCart(removeItem)
                        Swal.fire({
                            title: 'Item Eliminado',
                            icon: "success",
                            allowOutsideClick: false,
                            allowEscapeKey: false,
                            allowEnterKey: false,
                            confirmButtonText: `Aceptar`
                        })
                    }
            })
        
    }

    function clearButton() {
        if(cart.length !== 0){
            Swal.fire({
                title: '¿Desa vaciar el carrito?',
                icon: "question",
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
                showDenyButton: true,
                confirmButtonText: `SI`,
                denyButtonText: `NO`,
                }).then((result) => {
                    if (result.isConfirmed) {
                        setCart([])
                        Swal.fire({
                            title: 'Carrito Vaciado',
                            icon: "success",
                            allowOutsideClick: false,
                            allowEscapeKey: false,
                            allowEnterKey: false,
                            confirmButtonText: `Aceptar`
                        })
                    }
            })
        }
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
        <CartContext.Provider value={{cart, addItem, removeItem, clear, compra, setCompra, botonCompra, total, clearButton,  cartSize: cart.length}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProviders
