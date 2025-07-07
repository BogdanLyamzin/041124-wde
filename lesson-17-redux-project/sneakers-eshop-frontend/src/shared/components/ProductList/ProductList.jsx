/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import ProductCard from "./ProductCard/ProductCard";

const productListStyle = css`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 131px;
  justify-content: space-between;
  margin-bottom: 50px;
`;

const ProductList = ({ items = [] }) => {
  const elements = items.map(({ id, ...props }) => (
    <ProductCard key={id} {...props} />
  ));

  return <ul css={productListStyle}>{elements}</ul>;
};

export default ProductList;
