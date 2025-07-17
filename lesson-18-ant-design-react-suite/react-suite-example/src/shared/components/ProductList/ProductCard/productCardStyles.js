import {css} from "@emotion/react";

export const productCardStyle = css`
    border: 2px solid #00000026;
    border-radius: 42px;
    padding: 39px 42px;
`;

export const productCardImageStyle = css`
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 130px;
    margin-bottom: 32px;
`;

export const productCardNameStyle = css`
    font-size: 18px;
    line-height: 1;
    margin-bottom: 42px;
`;

export const productCardFooterStyle = css`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;

export const productCardPriceWrapperStyle = css`
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin: 0;
`;

export const productCardPriceStyle = css`
    font-size: 18px;
    font-weight: 700;
`;

export const productCardPlusIconStyle = css`
    cursor: pointer;
`;