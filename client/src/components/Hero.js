import CallToAction from "./CallToAction";
import styles from "./Hero.module.css";
const Hero = () => {

    return(
        <div>
            <div className={styles.heroImageContainer}>
                <img src={require("../images/SecondHero.jpg")} />
                <div className={styles.heroMask}>

                </div>
                <CallToAction />
            </div>
        </div>
    )
}

export default Hero;
