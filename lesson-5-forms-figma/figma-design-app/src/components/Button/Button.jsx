import styles from "./Button.module.css";

const classNames = {
    text: `${styles.btn} ${styles.text}`,
    outlined: `${styles.btn} ${styles.outlined}`,
    contained: `${styles.btn} ${styles.contained}`,
}

const Button = ({children, variant = "outlined", ...props}) => {
    return <button {...props} className={classNames[variant]}>{children}</button>
}

export default Button;