import styles from "./Button.module.css";

const Button = ({type = "button", className = "", onClick, children})=> {
    return <button onClick={onClick} type={type} className={`${styles.btn} ${className}`}>{children}</button>
}

export default Button;