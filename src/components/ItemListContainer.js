import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../asyncMock";
import ItemList from "./ItemList";

import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([]);

    const { categoryId } = useParams();
    
    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then((response) => {
                setProductos(response);
            })
            .catch((err) => console.log(err));
    }, [categoryId]);
            

    return (
        <div className="container">
            <h1>{greeting}</h1>
            <ItemList productos={productos} />
        </div>
    );
};

export default ItemListContainer;