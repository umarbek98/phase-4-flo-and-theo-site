import { createContext } from "react";


export const CustomerContext = createContext({
    customer: null,
    setCustomer: () => {}
})