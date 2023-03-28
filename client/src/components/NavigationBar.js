import styles from "./NavigationBar.module.css";
import  { LoginContext }  from '../contexts/LoginContext.js';
import { useContext, useReducer } from "react";


const NavigationBar = () => {
    const { setShowLogin } = useContext(LoginContext)


    return(
        <div className={styles.headerLinksContainer}>
            <a href="#">Home</a>
            <a href="#">Shop</a>
            <a href="#">About</a>
            <a href="#">Ingredients</a>
            <a href="#">Press</a>
            <a href="#">Contact</a>
            <button onClick={() => setShowLogin(true)}>Login/Register</button>
        </div>
    )
}

export default NavigationBar;