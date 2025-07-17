import { NavLink } from "react-router-dom";

import Container from "../../shared/components/Container/Container";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <ul className={styles.menu}>
          <li>
            <NavLink to="/" className={styles.link}>
              Home page
            </NavLink>
          </li>
          <li>
            <NavLink to="/completed" className={styles.link}>
              Completed
            </NavLink>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
