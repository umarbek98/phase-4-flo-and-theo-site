import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import styles from "./SearchSidebar.module.css";

const SearchSideBar = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [ searchSelections, setSearchSelections ] = useState({
    face: false,
    soap: false,
    butters: false,
    polishes: false,
    oils: false,
    men: false
  })

  const handleFilterClick = () => {
    setShowFilters(!showFilters);
  };

  const handleSelectionChange = (e) => {
    const { name , checked } = e.target
    setSearchSelections({...searchSelections, [name]:checked})
    console.log(searchSelections)
  }

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
          <Form.Check onChange={handleSelectionChange} type="checkbox" name="face" label="Face" size="sm" />
          <Form.Check onChange={handleSelectionChange} type="checkbox" name="soap" label="Soap" />
          <Form.Check onChange={handleSelectionChange} type="checkbox" name="butters" label="Body Butters" />
          <Form.Check onChange={handleSelectionChange} type="checkbox" name="polishes" label="Body Polishes" />
          <Form.Check onChange={handleSelectionChange} type="checkbox" name="oils" label="Body Oils" />
          <Form.Check onChange={handleSelectionChange} type="checkbox" name="men" label="Men" />
        </div>
      )}
    </div>
  );
};

export default SearchSideBar;