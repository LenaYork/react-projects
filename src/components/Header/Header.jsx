import "./Header.css";

export const Header = () => {
    return(
        <div className="header">
            <h1 className="app-title">Book Store</h1>
            <div className="header-icons">
                <p className="loginLink">Log In</p>
                <p className="cartLink">Cart</p>
            </div>
            
        </div>
    )
}