import styles from "./CartCard.module.css"
import { useNavigate } from "react-router-dom"

const CartCard = ({ product, onDelete, id }) => {

    const navigate = useNavigate();

    const handleDelete = () => {
        console.log(id)
        onDelete(id);
    }

    return (
        <div className={styles.productCardContainer}>
            <img alt="test" src={product.image_url} />
            <h6>{product.product_name}</h6>
            <h6>$ {product.price}</h6>
            <button className={styles.deleteButton} onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default CartCard;