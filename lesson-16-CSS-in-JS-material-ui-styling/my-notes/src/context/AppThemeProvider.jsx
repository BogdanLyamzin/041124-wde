import { createContext } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import useLocalStorage from "../shared/hooks/useLocalStorage";

export const colorModeContext = createContext("light");

const theme = {
  palette: {
    primary: {
      main: "#0a4487"
    }
  },
  typography: {
    h4: {
      fontSize: "1.8rem"
    }
  }
}

const AppThemeProvider = ({ children }) => {
  const [colorMode, setColorMode] = useLocalStorage("colorMode", "light");

  const toggleColorMode = () =>
    setColorMode((prevThemeName) => (prevThemeName === "light" ? "dark" : "light"));
    console.log(colorMode);

    const currentTheme = createTheme({
      palette: {
        ...theme.palette,
        mode: colorMode
      },
      typography: theme.typography,
    })

  return (
    <colorModeContext.Provider value={{colorMode, toggleColorMode}}>
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
    </colorModeContext.Provider>
  )
};

export default AppThemeProvider;
