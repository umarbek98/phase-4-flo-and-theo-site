import { Form } from "react-bootstrap"
import styles from "./SearchSidebar.module.css"
const SearchSideBar = () => {
    return (
        <div className={styles.searchSidebarContainer}>
            <h3 className={styles.searchBar}>Search</h3>
            <input id="search-bar" type="text" />
            <h3>Filter</h3>
            <div className={styles.checkBoxContainer}>
                <Form.Check
                type="checkbox"
                label="Face"
                size="sm" />
                <Form.Check
                type="checkbox"
                label="Soap" />
                <Form.Check
                type="checkbox"
                label="Body Butters" />
                <Form.Check
                type="checkbox"
                label="Body Polishes" />
                <Form.Check
                type="checkbox"
                label="Body Oils" />
                <Form.Check
                type="checkbox"
                label="Men" />
            </div>
        </div>
    )
}

export default SearchSideBar;