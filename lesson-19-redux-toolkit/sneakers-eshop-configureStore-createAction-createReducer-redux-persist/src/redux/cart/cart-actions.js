import {createAction} from "@reduxjs/toolkit";

/*
const createAction = type => {
    const actionCreator = payload => ({
        type,
        payload,
    });
    actionCreator.type = type;
    actionCreator.toString = ()=> type;
    return actionCreator;
}
*/

export const addToCart = createAction("cart/add");
console.log(addToCart.toString());
// export const addToCart = payload => ({
//     type: ADD_TO_CART,
//     payload,
// })

export const increaseInCart = createAction("cart/increase");
// export const increaseInCart = payload => ({
//     type: INCREASE_IN_CART,
//     payload,
// })

export const decreaseInCart = createAction("cart/decrease");
// export const decreaseInCart = payload => ({
//     type: DECREASE_IN_CART,
//     payload,
// })

export const deleteFromCart = createAction("cart/delete");
// export const deleteFromCart = payload => ({
//     type: DELETE_FROM_CART,
//     payload,
// })