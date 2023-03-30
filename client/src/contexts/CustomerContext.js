import { createContext, useState } from "react";


export const CustomerContext = createContext({
    customer: null,
    setCustomer: () => {},
    orders: [],
    setOrders: () => {},
})

export const CustomerProvider = (props) => {
    const [customer, setCustomer] = useState({})
    const [orders, setOrders] = useState([])
    // const [isLoggedIn, setIsLoggedIn] = useState(false)

    return(
        <CustomerContext.Provider value={{ customer, setCustomer, orders, setOrders }}>
            {props.children}
        </CustomerContext.Provider>
    )
}