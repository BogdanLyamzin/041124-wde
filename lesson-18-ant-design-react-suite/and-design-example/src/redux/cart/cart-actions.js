import {ADD_TO_CART, INCREASE_IN_CART, DECREASE_IN_CART, DELETE_FROM_CART} from './cart-types';

export const addToCart = payload => ({
    type: ADD_TO_CART,
    payload,
})

export const increaseInCart = payload => ({
    type: INCREASE_IN_CART,
    payload,
})

export const decreaseInCart = payload => ({
    type: DECREASE_IN_CART,
    payload,
})

export const deleteFromCart = payload => ({
    type: DELETE_FROM_CART,
    payload,
})