import "./Header.css";
import { Outlet, Link } from "react-router-dom";

export const Header = () => {
    return(
        <div className="header">
            <Link to="./home"><h1 className="app-title">Book Store</h1></Link>
            <div className="header-icons">
                <Link to="./home" className="headerLink">Log In</Link>
                <Link to="./cart" className="headerLink">Cart</Link>
            </div>
            <Outlet />
        </div>
    )
}