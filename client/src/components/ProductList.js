import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import ProductCard from "./ProductCard";
import styles from "./ProductList.module.css"
import { SearchContext } from "../contexts/SearchContext";

const ProductList = () => {
    const { products, setProducts } = useContext(ProductsContext)
    const { searchSelections, setSearchSelections, searchField, setSearchField} = useContext(SearchContext)

    const searchedResults = products.filter( product => product.product_name.toLowerCase().match(searchField.toLowerCase()))

    return (
        <div className={styles.productListContainer}>
            {searchedResults ? searchedResults.map(product => 
            <ProductCard 
            key={product.product_id} 
            product={product}/>)
        : null}
        </div>
    )
}

export default ProductList;