import styles from "./ProductInfo.module.css"

const ProductInfo = ({ product, setCart, cart, addToCart }) => {
    function handleAdd(){
        addToCart(product)
    }
    
    return(
        <div className={styles.productContainer}>
            <img alt="productplaceholder" src={product.image_url} />
            <div className={styles.productInfoContainer}>
                <h3>{product.product_name}</h3>
                <h3>${product.price}</h3>
                <button onClick={handleAdd}>ADD TO CART</button>
                <button>SHARE BUTTON</button>
            </div>
        </div>
    )
}

export default ProductInfo