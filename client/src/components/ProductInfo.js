import styles from "./ProductInfo.module.css"

const ProductInfo = () => {
    return(
        <div className={styles.productContainer}>
            <img alt="productplaceholder" src={require("../images/rose_clay_500x482.png")} />
            <div className={styles.productInfoContainer}>
                <h3>LOREMIPSUM PRODUCT TITLE</h3>
                <h3>LOREMIPSUM PRICE</h3>
                <button>ADD TO CART</button>
                <button>SHARE BUTTON</button>
            </div>
        </div>
    )
}

export default ProductInfo