import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";
import CartWidget from "../components/CartWidget";

function Layout() {
    return (

        <div>
            <Navbar>
                <CartWidget/>
            </Navbar>
            <Outlet />
        </div>

    )

}


export default Layout;