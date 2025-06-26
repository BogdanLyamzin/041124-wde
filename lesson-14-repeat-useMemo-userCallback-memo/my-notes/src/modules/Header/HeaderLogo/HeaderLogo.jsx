import { Link } from "react-router-dom";

import styles from "./HeaderLogo.module.css";

const HeaderLogo = ()=> {
    return <Link to="/" className={styles.logo}>My Note App</Link>
}

export default HeaderLogo;