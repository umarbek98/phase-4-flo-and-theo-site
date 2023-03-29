import styles from "./MainContent.module.css"
const MainContent = () => {
    return(
        <div>
            <div className={styles.contentContainer}>
                <img src={require("../images/FirstHero.jpeg")} />
                <p>FLO+THEO is an artisanal skin care brand, passionate about formulating 
                    simple yet effective vegan products. Inspired by Mother Nature, all 
                    ingredients are carefully chosen, highly potent, beneficial and non-toxic.</p>
            </div>
            <div className={styles.contentContainer}>
                <p>We believe that less is more, so our skin care blends never contain 
                    parabens, petroleum, synthetic fragrances or alcohol, just good, 
                    wholesome ingredients.</p>
                <img src={require("../images/SecondHero.jpg")} />
            </div>
        </div>
    )
}

export default MainContent;