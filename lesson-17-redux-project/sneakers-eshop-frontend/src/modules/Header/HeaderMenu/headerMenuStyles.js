import {css} from "@emotion/react";

export const headerMenuListStyle = css`
    list-style: none;
    display: flex;
    gap: 64px;
`;

export const headerMenuLinkStyle = css`
    text-decoration: none;
    color: #FFFFFF80;
    font-size: 15px;
    font-weight: 600;
    &.active {
        color: #fff;
    }
`;