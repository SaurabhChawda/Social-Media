import { createContext, useState, useContext, useEffect } from "react";
const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
  const [themeToggle, setThemeToggle] = useState("light");

  return <ThemeContext.Provider value={{ themeToggle, setThemeToggle }}>{children}</ThemeContext.Provider>;
};

const useTheme = () => useContext(ThemeContext);
export { useTheme, ThemeProvider };
