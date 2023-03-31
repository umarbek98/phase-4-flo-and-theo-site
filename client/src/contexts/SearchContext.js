import { createContext } from "react";


export const SearchContext = createContext({
    searchSelections:{
        face: false,
        soap: false,
        butters: false,
        polishes: false,
        oils: false,
        men: false
      },
    setSearchSelections: () => {}
})


export const SearchProvider = createContext({
    
})