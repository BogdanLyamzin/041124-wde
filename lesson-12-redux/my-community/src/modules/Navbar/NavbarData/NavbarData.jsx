import { useSelector } from "react-redux";

import styles from "./NavbarData.module.css";

const NavbarData = ()=> {
    const count = useSelector(store => store.communities.length);

    return (
        <div className={styles.data}>
            <span>My communities: {count}</span>
        </div>
    )
}

export default NavbarData;