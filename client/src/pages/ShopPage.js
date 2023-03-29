import styles from "./ShopPage.module.css";
import SearchSidebar from "../components/SearchSidebar"
import ProductList from "../components/ProductList"
const ShopPage = () => {

    return(
        <div className={styles.shopContainer}>
            <SearchSidebar />
            <ProductList />
        </div>
    )
}

export default ShopPage