import { useState, useEffect } from "react";
import { getProductsById } from "../asyncMock";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);

    const { itemId } = useParams();

    useEffect(() => {
        getProductsById(itemId)
            .then((response) => {
                setProducto(response);
            })
            .catch((err) => console.log(err));
    }, [itemId]);

    return (
        <div className="container">
            <ItemDetail {...producto} />
        </div>
    );
}

export default ItemDetailContainer;