import Container from "../../shared/components/Container/Container";

import styles from "./Main.module.css";

const Main = ({children}) => {
    return <main className={styles.main}>{children}</main>
}

export default Main;