import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import ProductCard from "./ProductCard";
import styles from "./ProductList.module.css"

const ProductList = () => {
    const { products, setProducts } = useContext(ProductsContext)

    return (
        <div className={styles.productListContainer}>
            {products.map(product => 
            <ProductCard 
            key={product.product_id} 
            product={product}/>)}
        </div>
    )
}

export default ProductList;