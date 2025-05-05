import Container from "../Container/Container";
import Logo from "../Logo/Logo";

import NavbarMenu from "./NavbarMenu/NavbarMenu";
import NavbarAuth from "./NavbarAuth/NavbarAuth";

import styles from "./Navbar.module.css";

const Navbar = ()=> {
    return (
        <nav className={styles.navbar}>
            <Container className={styles.content}>
                <Logo />
                <NavbarMenu />
                <NavbarAuth />
            </Container>
        </nav>
    )
}

export default Navbar;