import ItemCount from './ItemCount';

const ItemDetail = ({ id, title, image, category, description, price, stock }) => {
    
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">{title}</div>
                                <div className="card-image"><img src={image} alt={title} /></div>
                                <div className="card-text">Precio: ${price}</div>
                                <div className="card-text">Stock: {stock}</div>
                                <div className="card-text">Descripción: {description}</div>
                                <div className="card-text">Categoría: {category}</div>
                                <ItemCount stock={stock} initial={1} onAdd={(quantity) => console.log('Cantidad agregada')}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

export default ItemDetail;