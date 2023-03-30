import styles from "./CartCard.module.css"
import { useNavigate } from "react-router-dom"

const CartCard = ({ product, onDelete, id, addToCart }) => {

    const navigate = useNavigate();

    const handleDelete = () => {
        console.log(id)
        onDelete(id);
    }

    const handleAdd = () => {
        addToCart(product)
    }
    return (
        <div className={styles.productCardContainer}>
            <img alt="test" src={product.image_url} />
            <h6>{product.product_name}</h6>
            <h6>$ {product.price}</h6>
            <div>{product.qnty}</div>
            <button className={styles.deleteButton} onClick={handleAdd}>add</button>
            <button className={styles.deleteButton} onClick={handleDelete}>Remove</button>
        </div>
    )
}

export default CartCard;