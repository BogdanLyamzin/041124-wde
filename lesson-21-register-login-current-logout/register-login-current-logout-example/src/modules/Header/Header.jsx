import { Link, NavLink } from "react-router-dom";

import Container from "../../shared/components/Container/Container";

import HeaderAuth from "./HeaderAuth/HeaderAuth";
import HeaderUser from "./HeaderUser/HeaderUser";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <Link to="/" className={styles.logo}>LOGO</Link>
          <ul className={styles.menu}>
            <li>
              <NavLink to="/" className={styles.link}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacts" className={styles.link}>
                Contacts
              </NavLink>
            </li>
          </ul>
          <HeaderAuth />
        </div>
      </Container>
    </header>
  );
};

export default Header;
