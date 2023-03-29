import styles from "./CallToAction.module.css";
import { useNavigate } from "react-router-dom";
const CallToAction = () => {

    const navigate = useNavigate()

    return (
        <div className={styles.ctaContainer}>
            <span>BEAUTY KNOWS NO LIMITS! EMBRACE YOUR BEAUTY WITH THE POWER OF NATURE TODAY!</span>
            <div className={styles.ctaBtnGroupContainer}>
                <button onClick={() => navigate("/shop")} className={styles.productBtn}>Explore Products</button>
                <button onClick={() => navigate("/about")} className={styles.missionBtn}>Our Mission</button>
            </div>
        </div>
    )
}

export default CallToAction