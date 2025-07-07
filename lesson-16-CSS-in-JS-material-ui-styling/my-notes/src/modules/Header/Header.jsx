import AppBar from '@mui/material/AppBar';


import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import HeaderNotesInfo from "./HeaderNotesInfo/HeaderNotesInfo";
import HeaderThemeSwitcher from "./HeaderThemeSwitcher/HeaderThemeSwitcher";

import styles from "./Header.module.css";

const Header = ()=> {
    return (
        <AppBar position='static' sx={{
            flexDirection: "row",
            justifyContent: "space-between",
        }}>
            <HeaderLogo />
            <HeaderMenu />
            <div className={styles.block}>
                <HeaderNotesInfo />
                <HeaderThemeSwitcher />
            </div>
        </AppBar>
    )
}

export default Header;