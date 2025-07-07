/** @jsxImportSource @emotion/react */
import { useState, useCallback } from "react";
import { useTheme } from "@emotion/react";
// import { css } from "@emotion/react";

const toggleButtonStyle = ({ active = false, background, text }) => ({
  border: `1px solid ${text}`,
  borderRadius: "5px",
  padding: "10px 15px",
  color: active ? background : text,
  cursor: "pointer",
  backgroundColor: active ? text : background,
});

const ToggleButton = ({ children }) => {
  const [active, setActive] = useState(false);

  const theme = useTheme();

  const toggle = useCallback(() => setActive((prevState) => !prevState), []);

  return (
    <button onClick={toggle} css={toggleButtonStyle({ ...theme, active })}>
      {children}
    </button>
  );
};

export default ToggleButton;
