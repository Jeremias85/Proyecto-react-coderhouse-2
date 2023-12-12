import { BsFillCartFill } from "react-icons/bs";

function CartWidget() {
    return (
        <div>
            <BsFillCartFill />
            <span className="badge text-bg-secondary">4</span>
        </div>
    )
}

export default CartWidget;