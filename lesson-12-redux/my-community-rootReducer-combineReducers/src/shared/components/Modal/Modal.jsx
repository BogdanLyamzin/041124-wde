import { useEffect, useRef } from "react";

import styles from "./Modal.module.css";

const Modal = ({ close, children }) => {
  const overlayRef = useRef(null);

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
    if (event.target === overlayRef.current) {
      close();
    }
  };

  return (
    <div ref={overlayRef} className={styles.overlay} onClick={closeModal}>
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
