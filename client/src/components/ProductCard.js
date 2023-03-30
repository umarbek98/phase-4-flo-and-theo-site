import styles from "./ProductCard.module.css"
import { useNavigate } from "react-router-dom"
import { useContext } from "react";
import { OrderContext } from "../contexts/OrderContext";

const ProductCard = ({ product }) => {

    const navigate = useNavigate();
    const { showOrder, setShowOrder } = useContext(OrderContext)

    const moveToProductPage = () => {
        setShowOrder(false)
        navigate(`/shop/${product.product_id}`)
    }

    return (
        <div className={styles.productCardContainer} onClick={moveToProductPage}>
            <img alt="test" src={product.image_url} />
            <h6>{product.product_name}</h6>
            <h6>$ {product.price}</h6>
        </div>
    )
}

export default ProductCard;