import { createContext, useState } from "react";


export const CustomerContext = createContext({
    customer: null,
    setCustomer: () => {},
    // isLoggedIn: null,
    // setIsLoggedIn: () => {},
})

export const CustomerProvider = (props) => {
    const [customer, setCustomer] = useState({})
    // const [isLoggedIn, setIsLoggedIn] = useState(false)

    return(
        <CustomerContext.Provider value={{ customer, setCustomer }}>
            {props.children}
        </CustomerContext.Provider>
    )
}