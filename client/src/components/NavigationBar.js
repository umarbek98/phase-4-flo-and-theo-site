import styles from "./NavigationBar.module.css";
import  { LoginContext }  from '../contexts/LoginContext.js';
import { useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom"
import { CartContext } from "../contexts/CartContext";
import { CustomerContext } from "../contexts/CustomerContext";


const NavigationBar = () => {
    const { setShowLogin } = useContext(LoginContext)
    const { setShowCart } = useContext(CartContext)
    const { customer, setCustomer } = useContext(CustomerContext)
    const navigate = useNavigate();

    const Logout = () => {
        setCustomer(undefined)
        navigate("/")
    }

    return(
        <div className={styles.headerLinksContainer}>
            <a onClick={() => navigate("/")}>Home</a>
            <a onClick={() => navigate("/shop")}>Shop</a>
            <a onClick={() => navigate("/about")}>About</a>
            <a onClick={() => navigate("/ingredients")}>Ingredients</a>
            <a onClick={() => navigate("/press")}>Press</a>
            <a onClick={() => navigate("/contact")}>Contact</a>
            {customer ?
                <button onClick={Logout}>Logout, {customer.first_name}?</button>
                : 
                <button onClick={() => setShowLogin(true)}>Login/Register</button>}
           
            <button onClick={() => setShowCart(true)}>Cart</button>
        </div>
    )
}

export default NavigationBar;