import CallToAction from "./CallToAction";
import styles from "./Hero.module.css";
const Hero = () => {
    
    return(
        <div>
            <div className={styles.heroImageContainer}>
                <img src={require("../images/FirstHero.jpeg")} />
                <img src={require("../images/SecondHero.jpg")} />
            </div>
            <CallToAction />
        </div>
    )
}

export default Hero;