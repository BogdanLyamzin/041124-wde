/** @jsxImportSource @emotion/react */
import {NavLink} from "react-router-dom";

import headerMenuItems from "./headerMenuItems";

import {headerMenuListStyle, headerMenuLinkStyle} from "./headerMenuStyles";

const HeaderMenu = ()=> {
    const elements = headerMenuItems.map(({id, href, text})=> (
        <li key={id}>
            <NavLink to={href} css={headerMenuLinkStyle}>{text}</NavLink>
        </li>
    ));

    return (
        <ul css={headerMenuListStyle}>
            {elements}
        </ul>
    )
}

export default HeaderMenu;