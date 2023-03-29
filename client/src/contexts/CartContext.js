import React, { createContext, useState } from "react";

export const CartContext = createContext({
    showCart: null,
    setShowCart: () => {}
})

export const CartProvider = (props) => {
    const [showCart, setShowCart] = useState(false);

    return (
        <CartContext.Provider value={{ showCart, setShowCart }}>
            {props.children}
        </CartContext.Provider>
    )
}