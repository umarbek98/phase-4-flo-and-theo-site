import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import styles from "./SearchSidebar.module.css";

const SearchSideBar = () => {
  const [showFilters, setShowFilters] = useState(false);

  const handleFilterClick = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className={styles.searchSidebarContainer}>
      <h3 className={styles.searchBar}>Search</h3>
      <div className={styles.searchInputContainer}>
        <input placeholder="🔍" id="search-bar" type="text" />
        <Button variant="secondary" onClick={handleFilterClick} style={{ height: "45px", marginTop: '5px', padding: '2px', marginLeft: '5px', backgroundColor: '#007bff'}}>
          Filter
        </Button>
      </div>
      {showFilters && (
        <div className={styles.checkBoxContainer}>
          <Form.Check type="checkbox" label="Face" size="sm" />
          <Form.Check type="checkbox" label="Soap" />
          <Form.Check type="checkbox" label="Body Butters" />
          <Form.Check type="checkbox" label="Body Polishes" />
          <Form.Check type="checkbox" label="Body Oils" />
          <Form.Check type="checkbox" label="Men" />
        </div>
      )}
    </div>
  );
};

export default SearchSideBar;