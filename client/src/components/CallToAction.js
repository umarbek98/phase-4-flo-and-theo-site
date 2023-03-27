import styles from "./CallToAction.module.css";
const CallToAction = () => {

    return (
        <div className={styles.ctaContainer}>
            <span>BEAUTY KNOWS NO LIMITS! EMBRACE YOUR BEAUTY WITH THE POWER OF NATURE TODAY!</span>
            <div className={styles.ctaBtnGroupContainer}>
                <button className={styles.productBtn}>Explore Products</button>
                <button className={styles.missionBtn}>Our Mission</button>
            </div>
        </div>
    )
}

export default CallToAction