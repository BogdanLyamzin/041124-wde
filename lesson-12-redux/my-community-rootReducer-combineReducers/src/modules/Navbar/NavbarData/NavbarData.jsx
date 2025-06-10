import { useSelector } from "react-redux";

import { selectChannelsCount } from "../../../redux/channels/channels-selectors";

import styles from "./NavbarData.module.css";

const NavbarData = ()=> {
    const count = useSelector(selectChannelsCount);

    return (
        <div className={styles.data}>
            <span>My communities: {count}</span>
        </div>
    )
}

export default NavbarData;