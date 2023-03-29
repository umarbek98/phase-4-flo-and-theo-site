import React, { createContext, useState } from "react";

export const RegisterContext = createContext({
    showRegister: null,
    setShowRegister: () => {}
})

export const RegisterProvider = (props) => {
    const [showRegister, setShowRegister] = useState(false);

    return (
        <RegisterContext.Provider value={{ showRegister, setShowRegister }}>
            {props.children}
        </RegisterContext.Provider>
    )
}