import './Item.css';

const Item = ({ id, title, image, price, stock }) => {

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
                            <button className="btn btn-primary">Ver detalle</button>
                            {/* <Link to={`/productos/${id}`} className="btn btn-primary">Ver detalle</Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;