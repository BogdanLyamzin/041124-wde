import "./Button.css";

const Button = ({type = "button", text, variant})=> {
    const fullClassName = variant === "contained" ? "btn contained" : "btn outlined";

    return <button type={type} className={fullClassName}>{text}</button>
}

export default Button;
