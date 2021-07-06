import React, {useContext} from 'react'
import CartContext from '../../context/CartContext'
import "./Cart.css"

const Cart = () => {
    const {cart, removeItem, clear} = useContext(CartContext)

    return (
        <div>
            <button type="button" className="btn btn-danger boton-vaciar" onClick={clear}>Vaciar el Carrito</button>
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
                                    <th>Total</th>
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
        </div>
    )
}

export default Cart
