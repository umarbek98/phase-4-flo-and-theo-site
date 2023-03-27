import styles from "./NavigationBar.module.css";
const NavigationBar = () => {

    return(
        <div className={styles.headerLinksContainer}>
            <a href="#">Home</a>
            <a href="#">Shop</a>
            <a href="#">About</a>
            <a href="#">Ingredients</a>
            <a href="#">Press</a>
            <a href="#">Contact</a>
            <a href="#">Login/Register</a>
        </div>
    )
}

export default NavigationBar;