import { createReducer } from "@reduxjs/toolkit";

import {
  addToCart,
  increaseInCart,
  decreaseInCart,
  deleteFromCart,
} from "./cart-actions";

const cartReducer = createReducer([], (builder) => {
  builder
    .addCase(addToCart, (store, { payload }) => {
      const product = store.find((item) => item.id === payload.id);
      if (product) {
        product.count += 1;
      } else {
        store.push({ ...payload, count: 1 });
      }
    })
    .addCase(increaseInCart, (store, { payload }) => {
      const product = store.find((item) => item.id === payload);
      product.count += 1;
    })
    .addCase(decreaseInCart, (store, { payload }) => {
      const index = store.findIndex((item) => item.id === payload);
      store[index].count -= 1;
      if (!store[index].count) {
        store.splice(index, 1);
      }
    })
    .addCase(deleteFromCart, (store, { payload }) =>
      store.filter((item) => item.id !== payload)
    );
});
/*
const cartReducer = (store = [], { type, payload }) => {
  const copyStore = structuredClone(store);
  switch (type) {
    case addToCart.type:
      const product = copyStore.find((item) => item.id === payload.id);
      if (!product) {
        return [...store, { ...payload, count: 1 }];
      }
      product.count += 1;
      return copyStore;
    case increaseInCart.type:
      const increaseProduct = copyStore.find((item) => item.id === payload);
      increaseProduct.count += 1;
      return copyStore;
    case decreaseInCart.type:
      const decreaseProduct = copyStore.find((item) => item.id === payload);
      decreaseProduct.count -= 1;
      if (!decreaseProduct.count) {
        return copyStore.filter((item) => item.id !== payload);
      }
      return copyStore;
    case deleteFromCart.type:
      return copyStore.filter((item) => item.id !== payload);
    default:
      return store;
  }
};
*/

export default cartReducer;
