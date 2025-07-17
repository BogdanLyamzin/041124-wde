/** @jsxImportSource @emotion/react */
import { PlusIcon } from "../../icons";

import {
  productCardStyle,
  productCardImageStyle,
  productCardNameStyle,
  productCardFooterStyle,
  productCardPriceWrapperStyle,
  productCardPriceStyle,
  productCardPlusIconStyle,
} from "./productCardStyles";

const ProductCard = ({ onAddProductToCart, ...product}) => {
  const {image, name, price} = product;
  const style = {
    backgroundImage: `url("${image}")`,
  };

  return (
    <div css={productCardStyle}>
      <div css={productCardImageStyle} style={style} />
      <p css={productCardNameStyle}>{name}</p>
      <div css={productCardFooterStyle}>
        <p css={productCardPriceWrapperStyle}>
          <span>Цена:</span>
          <span css={productCardPriceStyle}>{price}</span>
        </p>
        <span onClick={() => onAddProductToCart(product)} css={productCardPlusIconStyle}>
          <PlusIcon />
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
