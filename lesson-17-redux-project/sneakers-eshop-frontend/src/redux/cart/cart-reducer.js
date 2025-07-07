import {
  ADD_TO_CART,
  INCREASE_IN_CART,
  DECREASE_IN_CART,
  DELETE_FROM_CART,
} from "./cart-types";

const cartReducer = (store = [], { type, payload }) => {
  const copyStore = structuredClone(store);
  switch (type) {
    case ADD_TO_CART:
      const product = copyStore.find((item) => item.id === payload.id);
      if (!product) {
        return [...store, { ...payload, count: 1 }];
      }
      product.count += 1;
      return copyStore;
    case INCREASE_IN_CART:
      const increaseProduct = copyStore.find((item) => item.id === payload);
      increaseProduct.count += 1;
      return copyStore;
    case DECREASE_IN_CART:
      const decreaseProduct = copyStore.find((item) => item.id === payload);
      decreaseProduct.count -= 1;
      if (!decreaseProduct.count) {
        return copyStore.filter((item) => item.id !== payload);
      }
      return copyStore;
    case DELETE_FROM_CART:
      return copyStore.filter((item) => item.id !== payload);
    default:
      return store;
  }
};

export default cartReducer;
