import styles from "./PageTitle.module.css";

const PageTitle = ({children})=> {
    return <h1 className={styles.title}>{children}</h1>
}

export default PageTitle;