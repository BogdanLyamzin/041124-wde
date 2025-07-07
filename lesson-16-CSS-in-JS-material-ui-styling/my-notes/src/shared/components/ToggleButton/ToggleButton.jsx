/** @jsxImportSource @emotion/react */
import { useState, useCallback } from "react";
import Button from "@mui/material/Button";
import { css } from "@emotion/react";

const toggleBtnStyle = ({active})=> css`
    border-width: ${active ? "3px" : "1px"};
`;

const ToggleButton = ({children})=> {
    const [active, setActive] = useState(false);

    const toggle = useCallback(()=> setActive(prevState => !prevState), []);

    return <Button css={toggleBtnStyle({active})} onClick={toggle} variant="outlined">{children}</Button>
}

export default ToggleButton;