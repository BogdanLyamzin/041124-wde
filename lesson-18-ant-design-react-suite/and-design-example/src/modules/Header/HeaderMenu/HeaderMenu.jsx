/** @jsxImportSource @emotion/react */
import {NavLink} from "react-router-dom";
import {Flex} from "antd";

import headerMenuItems from "./headerMenuItems";

import {headerMenuListStyle, headerMenuLinkStyle} from "./headerMenuStyles";

const HeaderMenu = ()=> {
    const elements = headerMenuItems.map(({id, href, text})=> (
        <li key={id}>
            <NavLink to={href} css={headerMenuLinkStyle}>{text}</NavLink>
        </li>
    ));

    return (
        <Flex component="ul" gap={64} css={headerMenuListStyle}>
            {elements}
        </Flex>
    )
}

export default HeaderMenu;