import styles from "./CallToAction.module.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CustomerContext } from "../contexts/CustomerContext";
const CallToAction = () => {

    const navigate = useNavigate()
    const { customer } = useContext(CustomerContext)

    return (
        <div className={styles.ctaContainer}>
            {customer ?  <span>{customer.first_name} {customer.last_name}, BEAUTY KNOWS NO LIMITS! EMBRACE YOUR BEAUTY WITH THE POWER OF NATURE TODAY!</span>
            :
            <span>BEAUTY KNOWS NO LIMITS! EMBRACE YOUR BEAUTY WITH THE POWER OF NATURE TODAY!</span> }
           
            <div className={styles.ctaBtnGroupContainer}>
                <button onClick={() => navigate("/shop")} className={styles.productBtn}>Explore Products</button>
                <button onClick={() => navigate("/about")} className={styles.missionBtn}>Our Mission</button>
            </div>
        </div>
    )
}

export default CallToAction