import Button from "../../Button/Button";

import styles from "./NavbarAuth.module.css";

const NavbarAuth = () => {
  return (
    <div className={styles.wrapper}>
      <a href="/register" className={styles.link}>
        <Button variant="text">Регистрация</Button>
      </a>
      <a href="/login" className={styles.link}>
        <Button variant="outlined">Вход</Button>
      </a>
    </div>
  );
};

export default NavbarAuth;
