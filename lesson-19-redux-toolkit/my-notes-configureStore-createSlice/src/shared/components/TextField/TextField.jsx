import { useId } from "react";
// import { useMemo } from "react";
// import { nanoid } from "nanoid";

import styles from "./TextField.module.css";

const TextField = ({ tag, register, name, label, error, ...props }) => {
  // const id = useMemo(() => nanoid(), []);
  const id = useId();

  return (
    <div className={styles.group}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      {tag === "textarea" ? (
        <textarea
          id={id}
          {...register(name)}
          {...props}
          className={styles.field}
        ></textarea>
      ) : (
        <input
          id={id}
          {...register(name)}
          {...props}
          className={styles.field}
        />
      )}
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default TextField;
