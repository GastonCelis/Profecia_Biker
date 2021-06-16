import React from "react";
import "./ItemDetail.css"

const detalleItem = () => {
    return (
        <div className="contenedor-item-detalle">
            <div className="imagen-item">
                <img src="https://motosprint.com/media/catalog/product/cache/1/thumbnail/1000x1000/9df78eab33525d08d6e5fb8d27136e95/c/a/casco-ls2-ff800-storm-racer-blue-red-.01.motosprint.com.jpg" alt="Casco LS2"></img>
            </div>
            <h3>Casco Integral LS2 RBCN</h3>
            <div>
                <ul>
                    <li>Visor anti rayas con enganche para alta velocidad.</li>
                    <li>Lente de sol interno anti rayas.</li>
                    <li>Pinlock</li>
                    <li>3 Ventilaciones de aire.</li>
                    <li>Interior confortable con goma espuma relajante.</li>
                </ul>
                <div>
                    <label>Talles</label>
                    <div>
                        <button>M</button><button>L</button><button>XL</button>
                    </div>
                    <a href="#">Ver Tabla de Talles</a>
                </div>
                <p className="precio-item">Precio: $18000</p>
                <p>Stock: 15</p>
                <div className="boton-carrito">
                    <button>Agregar al Carrito</button>
                </div>
            </div>
        </div>
    );
}

export default detalleItem;