import { actionTypes } from "./actionTypes"

export const initialState = {
    loading: false,
    products: [],
    cart: [],
    error: false
}
export const productReducer = (state, action) => {
    switch(action.type){
       case actionTypes.FETCHING_START: {
            return {
                ...state,
                loading: true,
                error: false
            }
       }
       case actionTypes.FETCHING_END: {
        return {
            ...state,
            loading: false,
            products: action.payload,
            error: false
        }
       }
       case actionTypes.FETCHING_ERROR: {
        return {
            ...state,
            loading: false,
            message: action.payload,
            error: true
        }
       }
       case actionTypes.FETCHING_CART: {
        return {
            ...state,
            loading: false,
            cart: [...state.cart, action.payload],
            error: false
        }
       }
       default:
         return state
    }
}