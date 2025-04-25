import { useState } from "react";

import styles from "./ToggleButton.module.css";

const ToggleButton = ({ children }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(prevActive => {
        console.log(prevActive);
        return !prevActive;
    });
  };

  const fullClassName = active ? `${styles.btn} ${styles.active}` : styles.btn;

  return (
    <button onClick={handleClick} type="button" className={fullClassName}>
      {children}
    </button>
  );
};

export default ToggleButton;
