// import { useContext } from "react";

import Container from "../../shared/components/Container/Container";
import PageTitle from "../../shared/components/PageTitle/PageTitle";

import Posts from "../Posts/Posts";

import useTheme from "../../shared/hooks/useTheme";

// import { themeContext } from "../../context/themeProvider";

import styles from "./Main.module.css";

const Main = () => {
  // const {theme} = useContext(themeContext);
  const {theme} = useTheme();
  
  return (
    <main className={`${styles.main} ${styles[theme]}`}>
      <Container>
        <PageTitle theme={theme}>Home Page</PageTitle>
        <Posts />
      </Container>
    </main>
  );
};

export default Main;
