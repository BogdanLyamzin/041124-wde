import { NavLink } from "react-router-dom";

import styles from "./NavbarMenu.module.css";

import items from "./items";

const NavbarMenu = ()=> {
    const elements = items.map(({id, href, text})=> (
        <li key={id}>
            <NavLink to={href} className={styles.link}>{text}</NavLink>
        </li>
    ));

    return (
        <ul className={styles.menu}>{elements}</ul>
    )
}

export default NavbarMenu;