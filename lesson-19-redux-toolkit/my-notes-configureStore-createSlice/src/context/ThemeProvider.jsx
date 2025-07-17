import { useEffect, createContext } from "react";

import useLocalStorage from "../shared/hooks/useLocalStorage";

export const themeContext = createContext("dark");

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  useEffect(()=> {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));

  return <themeContext.Provider value={{theme, toggleTheme}}>{children}</themeContext.Provider>;
};

export default ThemeProvider;
