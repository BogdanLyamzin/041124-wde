import { NavLink } from "react-router-dom";

import styles from "./HeaderAuth.module.css";

const HeaderAuth = ()=> {
    return (
        <div className={styles.container}>
            <NavLink to="/login" className={styles.link}>Login</NavLink>
            <NavLink to="/register" className={styles.link}>Register</NavLink>
        </div>
    )
}

export default HeaderAuth;