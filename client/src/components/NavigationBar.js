import styles from "./NavigationBar.module.css";
import  { LoginContext }  from '../contexts/LoginContext.js';
import { useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom"


const NavigationBar = () => {
    const { setShowLogin } = useContext(LoginContext)
    const navigate = useNavigate();

    return(
        <div className={styles.headerLinksContainer}>
            <a onClick={() => navigate("/")}>Home</a>
            <a onClick={() => navigate("/shop")}>Shop</a>
            <a onClick={() => navigate("/about")}>About</a>
            <a onClick={() => navigate("/ingredients")}>Ingredients</a>
            <a onClick={() => navigate("/press")}>Press</a>
            <a onClick={() => navigate("/contact")}>Contact</a>
            <button onClick={() => setShowLogin(true)}>Login/Register</button>
        </div>
    )
}

export default NavigationBar;