import styles from "./HeaderUser.module.css";

const HeaderUser = ()=> {
    return (
        <div className={styles.container}>
            <span className={styles.email}>bogdan@gmail.com</span>
            <button type="button" className={styles.logout}>Logout</button>
        </div>
    )
}

export default HeaderUser;