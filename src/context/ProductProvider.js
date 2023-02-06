import React, { createContext, useContext, useEffect, useReducer, useState } from 'react';
import { actionTypes } from '../state/ProductState/actionTypes';
import { initialState, productsReducer } from '../state/ProductState/ProductReducer';

export const PRODUCT_CONTEXT = createContext()

const ProductProvider = ({children}) => {
    const [state, dispatch] = useReducer(productsReducer, initialState)
    console.log(state)
    useEffect(() => {
        dispatch({type: actionTypes.FETCHING_START});
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => dispatch({type: actionTypes.FETCHING_SUCCESS, payload: data}))
        .catch(error => dispatch({type: actionTypes.FETCHING_ERROR}))
    }, [])

    const value = {
        products: state,
        dispatch
    }
    return (
        <PRODUCT_CONTEXT.Provider value={value}>
            {children}
        </PRODUCT_CONTEXT.Provider>
    );
};

export const useProducts = () => {
    const context = useContext(PRODUCT_CONTEXT)
    return context;
}
export default ProductProvider;