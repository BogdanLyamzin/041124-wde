import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import HeaderNotesInfo from "./HeaderNotesInfo/HeaderNotesInfo";
import HeaderThemeSwitcher from "./HeaderThemeSwitcher/HeaderThemeSwitcher";

import styles from "./Header.module.css";

const Header = ()=> {
    return (
        <header className={styles.header}>
            <HeaderLogo />
            <HeaderMenu />
            <div className={styles.block}>
                <HeaderNotesInfo />
                <HeaderThemeSwitcher />
            </div>
        </header>
    )
}

export default Header;