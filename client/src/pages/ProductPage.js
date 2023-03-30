import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductInfo from "../components/ProductInfo";
import styles from "./ProductPage.module.css";
const ProductPage = ({ cart, setCart }) => {
    const { product_id } = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        fetch(`/products/${product_id}`)
            .then((res) => (res.json()))
            .then((productData) => (setProduct(productData)))
            .then((err) => console.log(err))
    },[])
    return(
        <div className={styles.productPageContainer}>
            <ProductInfo product={product} cart={cart} setCart={setCart}/>
            <p>{product.description}</p>
        </div>
    )
}

export default ProductPage;