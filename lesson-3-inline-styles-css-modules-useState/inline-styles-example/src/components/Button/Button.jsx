import "./Button.css";

const btnStyle = {
  padding: "5px 30px",
  fontSize: "14px",
  outline: "none",
  cursor: "pointer",
  border: "2px solid var(--dark-background)",
  color: "#fff",
  backgroundColor: "var(--dark-background)",
};

const Button = ({ type = "button", text, variant }) => {
  const fullClassName =
    variant === "contained" ? "btn contained" : "btn outlined";

  return (
    <button style={btnStyle} type={type}>
      {text}
    </button>
  );
};

export default Button;
