import { useEffect } from "react";

import styles from "./Modal.module.css";

const Modal = ({ close, children }) => {
  useEffect(() => {
    const closeOnEscape = event => {
        if(event.code === "Escape") {
            console.log(event.code);
            close();
        };
    };

    document.addEventListener("keydown", closeOnEscape);

    return ()=> document.removeEventListener("keydown", closeOnEscape);
  }, [close]);

  const closeModal = (event) => {
    if (event.target === event.currentTarget) {
      close();
    }
  };

  return (
    <div className={styles.overlay} onClick={closeModal}>
      <div className={styles.content}>
        <span className={styles.close} onClick={close}>
          x
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
