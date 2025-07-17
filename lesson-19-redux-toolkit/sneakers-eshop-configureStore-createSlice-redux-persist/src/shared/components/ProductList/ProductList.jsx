/** @jsxImportSource @emotion/react */
import {useDispatch} from "react-redux";
import { css } from "@emotion/react";

import ProductCard from "./ProductCard/ProductCard";

import {addToCart} from "../../../redux/cart/cart-slice";
 
const productListStyle = css`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 131px;
  justify-content: space-between;
  margin-bottom: 50px;
`;

const ProductList = ({ items = [] }) => {
  const dispatch = useDispatch();

  const onAddProductToCart = payload => {
    dispatch(addToCart(payload));
  }

  const elements = items.map(item => (
    <ProductCard key={item.id} {...item} onAddProductToCart={onAddProductToCart} />
  ))

  return <ul css={productListStyle}>{elements}</ul>;
};

export default ProductList;
