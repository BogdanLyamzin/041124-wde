import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { selectUser } from "../../../redux/auth/auth-selectors";

import { logoutUser } from "../../../redux/auth/auth-thunks";

import styles from "./HeaderUser.module.css";

const HeaderUser = () => {
  const { email } = useSelector(selectUser);
  const dispatch = useDispatch();

  const onLogout = ()=> {
    dispatch(logoutUser());
  }
  
  return (
    <div className={styles.container}>
      <Link to="/profile" className={styles.email}>{email}</Link>
      <button onClick={onLogout} type="button" className={styles.logout}>
        Logout
      </button>
    </div>
  );
};

export default HeaderUser;
