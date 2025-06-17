import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import HeaderNotesInfo from "./HeaderNotesInfo/HeaderNotesInfo";

import styles from "./Header.module.css";

const Header = ()=> {
    return (
        <header className={styles.header}>
            <HeaderLogo />
            <HeaderMenu />
            <HeaderNotesInfo />
        </header>
    )
}

export default Header;