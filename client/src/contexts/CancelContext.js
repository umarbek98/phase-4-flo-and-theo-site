import React, {createContext, useState} from "react";

export const CancelContext = createContext({
    showCancel: null,
    setShowCancel: () => {}
})

export const CancelProvider = (props) => {
    const [showCancel, setShowCancel] = useState(false)

    return (
        <CancelContext.Provider value = {{ showCancel, setShowCancel }}>
            {props.children}
        </CancelContext.Provider>
    )
}