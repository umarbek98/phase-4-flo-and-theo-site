import React, {createContext, useState} from "react";

export const CancelConfirmContext = createContext({
    showCancelConfirm: null,
    setShowCancelConfirm: () => {},
})

export const CancelConfirmProvider = (props) => {
    const [showCancelConfirm, setShowCancelConfirm] = useState(false)

    return(
        <CancelConfirmContext.Provider value={{ showCancelConfirm, setShowCancelConfirm}}>
            {props.children}
        </CancelConfirmContext.Provider>
    )
}