import NavbarMenu from "./NavbarMenu/NavbarMenu";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.content}>
          <NavbarMenu />
          <Logo />
          <Button text="Buy Now"  variant="contained" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
