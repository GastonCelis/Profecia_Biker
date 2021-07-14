import React, {useContext, useState} from 'react'
import CartContext from '../../context/CartContext'
import Orders from '../Orders/Orders'
import "./Cart.css"

const Cart = () => {
    const {cart, removeItem, clear} = useContext(CartContext)
    const [compra, setCompra] = useState(false)

    var total = 0
    cart.forEach(elemento => {
        total = (elemento.cantidad * elemento.infoProductos.precio) + total
    });

    const botonCompra = ()=>{
        if (total === 0){
            alert("El Carrito esta vacio no hay Items para comprar")
        }
        else{
            setCompra(true)
        }
    }

    

    return (
        <div className="cart">
            <div className="container-botones-cart">
                <button type="button" className="btn btn-danger boton-vaciar-comprar" onClick={clear}>Vaciar el Carrito</button>
                <h2>TOTAL: $ {total}</h2>
                <button type="button" className="btn btn-success boton-vaciar-comprar" onClick={()=> botonCompra()}>Comprar</button>
            </div>
            {cart.map(elemento=>{
                return(
                    <div>
                        <table className="table container">
                            <thead>
                                <tr className="table-danger">
                                    <th>Foto</th>
                                    <th>Nombre</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                    <th>Sub-Total</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img src={elemento.infoProductos.imagen} alt={elemento.infoProductos.nombre} className="imagen-carrito"></img></td>
                                    <td>{elemento.infoProductos.nombre}</td>
                                    <td>$ {elemento.infoProductos.precio}</td>
                                    <td>{elemento.cantidad}</td>
                                    <td>$ {`${elemento.cantidad * elemento.infoProductos.precio}`}</td>
                                    <td><button type="button" className="btn btn-danger boton-eliminar" onClick={()=>removeItem(elemento.infoProductos.id)}><i className="bi bi-trash icono-eliminar"></i></button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )
            })}
            {
                compra ?
                <Orders cart={cart} total={total} setCompra={setCompra} clear={clear}/>
                :
                <span></span>
            }
            
        </div>
    )
}

export default Cart
