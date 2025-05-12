// import { useContext } from "react";

// import { themeContext } from "../../context/themeProvider";
import useTheme from "../../shared/hooks/useTheme";

import Container from "../../shared/components/Container/Container";

import styles from "./Footer.module.css";

const Footer = () => {
  // const {theme} = useContext(themeContext);
  const {theme} = useTheme();
  
  return (
    <footer className={`${styles.footer} ${styles[theme]}`}>
      <Container>
        <p className={`${styles.copyright} ${styles[theme]}`}>2025 @Copyright</p>
      </Container>
    </footer>
  );
};

export default Footer;
