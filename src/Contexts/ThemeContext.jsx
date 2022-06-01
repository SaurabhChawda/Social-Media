import { createContext, useState, useContext, useEffect } from "react";
import { useSelector } from "react-redux";
const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
  const loggedInUser = useSelector((state) => state.auth.isUserLoggedIn);
  const [themeToggle, setThemeToggle] = useState("light");

  useEffect(() => {
    if (!loggedInUser) {
      localStorage.setItem("theme", JSON.stringify("light"));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(themeToggle));
  }, [loggedInUser, themeToggle]);

  useEffect(() => {
    setThemeToggle(JSON.parse(localStorage.getItem("theme")));
  }, []);

  return <ThemeContext.Provider value={{ themeToggle, setThemeToggle }}>{children}</ThemeContext.Provider>;
};

const useTheme = () => useContext(ThemeContext);
export { useTheme, ThemeProvider };
