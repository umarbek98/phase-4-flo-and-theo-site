import { createContext, useState } from "react";


export const SearchContext = createContext({
    searchSelections: null,
    setSearchSelections: () => {},
    searchField: null,
    setSearchField: () => {},
})


export const SearchProvider = (props) => {
    const [ searchSelections, setSearchSelections ] = useState({
        face: false,
        soap: false,
        butters: false,
        polishes: false,
        oils: false,
        men: false
    })
    const [ searchField, setSearchField ] = useState("")


    return(
        <SearchContext.Provider value= {{ searchSelections, setSearchSelections, searchField, setSearchField}}>
            {props.children}
        </SearchContext.Provider>
    )
}