import styles from "./ProductCard.module.css"
const ProductCard = () => {

    return (
        <div className={styles.productCardContainer}>
            <img src={require("../images/rose_clay_500x482.png")} />
            <h6>LOREMIPSUM TITLE</h6>
            <h6>LOREMIPSUM PRODUCT</h6>
        </div>
    )
}

export default ProductCard;