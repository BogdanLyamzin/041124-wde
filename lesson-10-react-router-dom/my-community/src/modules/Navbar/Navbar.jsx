import Container from "../../shared/components/Container/Container";

import NavbarLogo from "./NavbarLogo/NavbarLogo";
import NavbarMenu from "./NavbarMenu/NavbarMenu";

import styles from "./Navbar.module.css";

const Navbar = ()=> {
    return (
        <nav className={styles.navbar}>
            <Container>
                <div className={styles.content}>
                    <NavbarLogo />
                    <NavbarMenu />
                    <div />
                </div>
            </Container>
        </nav>
    )
}

export default Navbar;