import React, { createContext, useEffect, useState } from 'react';

export const PRODUCT_CONTEXT = createContext()

const ProductProvider = ({children}) => {
    const [products, setProducts] = useState({})
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const value = {
        products
    }
    return (
        <PRODUCT_CONTEXT.Provider value={value}>
            {children}
        </PRODUCT_CONTEXT.Provider>
    );
};

export default ProductProvider;