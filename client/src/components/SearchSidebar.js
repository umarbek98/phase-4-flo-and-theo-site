import { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import styles from "./SearchSidebar.module.css";
import { SearchContext } from "../contexts/SearchContext";

const SearchSideBar = () => {
  const [showFilters, setShowFilters] = useState(false);
  const { searchSelections, setSearchSelections, setSearchField } = useContext(SearchContext)
  const handleFilterClick = () => {
    setShowFilters(!showFilters);
  };

  const handleSelectionChange = (e) => {
    const { name , checked } = e.target
    setSearchSelections({...searchSelections, [name]:checked})
    console.log(searchSelections)
  }

  const handleSearchChange = (e) => {
    setSearchField(e.target.value)
  }

  return (
    <div className={styles.searchSidebarContainer}>
      <h3 className={styles.searchBar}>Search</h3>
      <div className={styles.searchInputContainer}>
        <input onChange={handleSearchChange} placeholder="🔍" id="search-bar" type="text" />
        {/* <Button variant="secondary" onClick={handleFilterClick} style={{ height: "45px", marginTop: '5px', padding: '2px', marginLeft: '5px', backgroundColor: '#007bff'}}>
          Filter
        </Button> */}
      </div>
      {/* {showFilters && (
        <div className={styles.checkBoxContainer}>
          <Form.Check checked={searchSelections.face} onChange={handleSelectionChange} type="checkbox" name="face" label="Face" size="sm" />
          <Form.Check checked={searchSelections.soap} onChange={handleSelectionChange} type="checkbox" name="soap" label="Soap" />
          <Form.Check checked={searchSelections.butters} onChange={handleSelectionChange} type="checkbox" name="butters" label="Body Butters" />
          <Form.Check checked={searchSelections.polishes} onChange={handleSelectionChange} type="checkbox" name="polishes" label="Body Polishes" />
          <Form.Check checked={searchSelections.oils} onChange={handleSelectionChange} type="checkbox" name="oils" label="Body Oils" />
          <Form.Check checked={searchSelections.men} onChange={handleSelectionChange} type="checkbox" name="men" label="Men" />
        </div>
      )} */}
    </div>
  );
};

export default SearchSideBar;