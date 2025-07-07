import { useState } from "react";
import { ThemeProvider } from "@emotion/react";

 const lightTheme = {
    background: "#fff",
    text: "#000"
 };

 const darkTheme = {
    background: "#000",
    text: "#fff"
 }

const Theme = ({children}) => {
    const [themeName, setThemeName] = useState("light");

    return (
        <ThemeProvider theme={lightTheme}>
            {children}
        </ThemeProvider>
    )
};

export default Theme;