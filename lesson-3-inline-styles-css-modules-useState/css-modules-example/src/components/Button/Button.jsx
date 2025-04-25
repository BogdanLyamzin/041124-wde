import styles from "./Button.module.css";

// console.log(styles);

const Button = ({ type = "button", text, variant }) => {
  const fullClassName =
    variant === "contained"
      ? `${styles.btn} ${styles.contained}`
      : `${styles.btn} ${styles.outlined}`;

  return (
    <button type={type} className={fullClassName}>
      {text}
    </button>
  );
};

export default Button;
