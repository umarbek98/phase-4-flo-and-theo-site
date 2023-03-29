import styles from "./ProductCard.module.css"
import { useNavigate } from "react-router-dom"

const ProductCard = ({ product }) => {

    const navigate = useNavigate();

    return (
        <div className={styles.productCardContainer} onClick={() => navigate(`/shop/${product.product_id}`)}>
            <img alt="test" src={product.image_url} />
            <h6>{product.product_name}</h6>
            <h6>$ {product.price}</h6>
        </div>
    )
}

export default ProductCard;