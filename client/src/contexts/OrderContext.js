import React, { createContext, useState } from "react";

export const OrderContext = createContext({
    showOrder: null,
    setShowOrder: () => {}
})

export const OrderProvider = (props) => {
    const [showOrder, setShowOrder] = useState(false)

    return(
        <OrderContext.Provider value={{ showOrder, setShowOrder }}>
            {props.children}
        </OrderContext.Provider>
    )
}