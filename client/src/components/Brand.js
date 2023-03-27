import styles from "./Brand.module.css"
const Brand = () => {

    return(
        <div className={styles.brandContainer}>
            <img src={require("../images/squarespace.png")} />
            <span>100% VEGAN SKIN CARE</span>
        </div>
    )
}

export default Brand;