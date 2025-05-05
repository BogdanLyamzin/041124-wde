import styles from "./NavbarMenu.module.css";

const NavbarMenu = ()=> {
    return (
        <ul className={styles.menu}>
            <li>
                <a href="/" className={styles.link}>Поиск работы</a>
            </li>
            <li>
                <a href="/" className={styles.link}>Поиск стартапов</a>
            </li>
        </ul>
    )
}

export default NavbarMenu;