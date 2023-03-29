import styles from "./ProductCard.module.css"
import { useNavigate } from "react-router-dom"

const ProductCard = () => {

    const navigate = useNavigate();

    return (
        <div className={styles.productCardContainer} onClick={() => navigate("/shop/1")}>
            <img alt="test" src={require("../images/rose_clay_500x482.png")} />
            <h6>LOREMIPSUM TITLE</h6>
            <h6>LOREMIPSUM PRODUCT</h6>
        </div>
    )
}

export default ProductCard;