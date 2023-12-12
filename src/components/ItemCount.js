import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [contador, setContador] = useState(initial);

    const sumar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    };

    const restar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    };

    const agregar = () => {
        onAdd(contador);
    };

    return (
        <div className="card-section">
            <div className="card">
                <div className="card-body">
                    <div className="card-title">Producto</div>
                    <div className="card-text">Contador: {contador}</div>
                    <div className="card-text">Stock: {stock}</div>
                    <button className="btn btn-primary" onClick={sumar}>
                        +
                    </button>
                    <button className="btn btn-primary" onClick={restar}>
                        -
                    </button>
                    <button className="btn btn-primary" onClick={agregar} disabled={!stock}>
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </div>
    );
}