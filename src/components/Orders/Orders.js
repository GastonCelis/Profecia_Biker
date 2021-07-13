import React, { useState } from 'react';
import {getFirestore} from "../../factory/Firebase";
import firebase from 'firebase/app';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import "./Orders.css"

const Orders = ({cart, total, setCompra, clear}) => {
    const [load, setLoad] = useState(false);
    const saveOrder = ()=>{
        setLoad(true)
        const db = getFirestore()
        const order = db.collection("orders");
        const newOrder = {
            buyer:{
                email: "ejemplo@gmail.com",
                nombre: "ejemplo",
                telefono: 123456
            },
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            items: cart,
            total: total
        }
        order.add(newOrder).then(({id})=>{
            setLoad(false);
            setCompra(false);
            alert(`Se realizó su compra el nro de orden es: ${id}`);
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
                            <input type="text" placeholder="Nombre de Ejemplo" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Dirección de Email</label>
                            <input type="email" placeholder="ejemplo@gmail.com" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Teléfono de contacto</label>
                            <input type="number" placeholder="+59-111-2222222" className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <button type="button" className="btn btn-success" onClick={() => saveOrder()}>Finalizar Compra</button>
                    </form>
                </div>
            }
        </div>
    )
}

export default Orders
