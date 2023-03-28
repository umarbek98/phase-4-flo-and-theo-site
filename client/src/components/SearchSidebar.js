import { Form } from "react-bootstrap"
const SearchSideBar = () => {
    return (
        <div>
            <h3>Search</h3>
            <input type="text" />
            <h3>Filter</h3>
            <Form.Check
            type="checkbox"
            label="Face" />
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
    )
}

export default SearchSideBar;