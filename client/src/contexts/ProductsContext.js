import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext({
    products: null,
    setProducts: () => {}
})

export const ProductsProvider = (props) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("/products")
            .then((res) => (res.json()))
            .then((productList) => setProducts(productList))
            .then((err) => alert(err))
    },[])
    return(
        <ProductsContext.Provider value={{ products, setProducts }}>
            {props.children}
        </ProductsContext.Provider>
    )
}