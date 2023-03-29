import React, { createContext, useState } from "react";

export const CheckoutContext = createContext({
    showCheckout: null,
    setShowCheckout: () => {},
})

export const CheckoutProvider = (props) => {
    const [showCheckout, setShowCheckout] = useState(false)

    return(
        <CheckoutContext.Provider value={{ showCheckout, setShowCheckout }}>
            {props.children}
        </CheckoutContext.Provider>
    )
}