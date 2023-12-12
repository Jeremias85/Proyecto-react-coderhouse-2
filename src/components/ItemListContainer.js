import { useState, useEffect } from "react";
import { getProducts } from "../asyncMock";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([]);

    // useEffect(() => {
    //     new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve(getProducts());
    //         }, 2000);
    //     }).then((result) => {
    //         setProductos(result);
    //         setLoading(false);
    //     });
    // }, []);

    // return (
    //     <div className="container">
    //         <h1>{greeting}</h1>
    //         {loading ? <h2>Cargando...</h2> : <ItemList productos={productos} />}
    //     </div>
    // );
    useEffect(() => {
        getProducts()
            .then((response) => {
                setProductos(response);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="container">
            <h1>{greeting}</h1>
            <ItemList productos={productos} />
        </div>
    );
};

export default ItemListContainer;