import styles from "./NavbarMenu.module.css";

import items from "./items";

const NavbarMenu = ()=> {
    const elements = items.map(({id, href, text})=> (
        <li key={id}>
            <a href={href} className={styles.link}>{text}</a>
        </li>
    ));

    return (
        <ul className={styles.menu}>{elements}</ul>
    )
}

export default NavbarMenu;