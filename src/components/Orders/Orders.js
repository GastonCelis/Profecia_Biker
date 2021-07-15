import React, { useState } from 'react';
import {getFirestore} from "../../factory/Firebase";
import firebase from 'firebase/app';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import swal from "sweetalert2";
import "./Orders.css"

const Orders = ({cart, total, setCompra, clear}) => {
    const [load, setLoad] = useState(false);
    const [datos, setDatos] = useState({
        nombre: "",
        email: "",
        telefono: ""
    })
    
    const getInput = (event)=>{
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const saveOrder = ()=>{
        setLoad(true)
        const db = getFirestore()
        const order = db.collection("orders");
        const newOrder = {
            buyer:{
                email: datos.email,
                nombre: datos.nombre,
                telefono: datos.telefono
            },
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            items: cart,
            total: total
        }
        order.add(newOrder).then(({id})=>{
            setLoad(false);
            setCompra(false);
            swal.fire({
                title: "¡Se realizó su compra!",
                text: `El número de orden es: ${id}`,
                icon: "success",
                confirmButtonText: "Aceptar",
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false
            });
        }).catch((error)=>{
            setLoad(false);
            console.log(error);
        });
        clear()
    };

    return (
        <div className="orden">
            
            {
                load ? 
                <div className="loader-orden">
                    <ClimbingBoxLoader color={"#FF001F"} size={70}/>
                </div>
                :
                <div>
                    <h2 className="titulo-orden">Complete los siguientes datos para finalizar la compra</h2>
                    <form>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Nombre</label>
                            <input type="text" placeholder="Nombre de Ejemplo" className="form-control" name="nombre" onChange={getInput} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Dirección de Email</label>
                            <input type="email" placeholder="ejemplo@gmail.com" className="form-control" name="email" onChange={getInput} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Teléfono de contacto</label>
                            <input type="number" placeholder="111-2222222" className="form-control" name="telefono" onChange={getInput} id="exampleInputPassword1"/>
                        </div>
                        <button type="button" className="btn btn-success" onClick={() => saveOrder()}>Finalizar Compra</button>
                    </form>
                </div>
            }
        </div>
    )
}

export default Orders
