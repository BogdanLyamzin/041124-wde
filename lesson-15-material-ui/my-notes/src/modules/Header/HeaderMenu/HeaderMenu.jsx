import { NavLink } from "react-router-dom";

import menuItems from "./menu-items";

import styles from "./HeaderMenu.module.css";

const HeaderMenu = ()=> {
    const elements = menuItems.map(({id, href, text})=> (
        <li key={id}>
            <NavLink to={href} className={styles.link}>{text}</NavLink>
        </li>
    ));

    return (
        <ul className={styles.menu}>
            {elements}
        </ul>
    )
}

export default HeaderMenu;