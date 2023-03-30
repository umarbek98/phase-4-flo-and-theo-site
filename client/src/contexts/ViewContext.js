import { createContext, useState } from "react";

export const ViewContext = createContext({
    view: null,
    setView: () => {},
})

export const ViewProvider = (props) => {
    const [view, setView] = useState({})

    return(
        <ViewContext.Provider value = {{ view, setView }}>
            {props.children}
        </ViewContext.Provider>
    )
}