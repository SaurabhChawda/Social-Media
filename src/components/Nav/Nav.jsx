import "./nav.css";
import { Link } from "react-router-dom";
import { MdDarkMode, MdLightMode, MdOutlineLogout} from "react-icons/md";
import { useNavigate } from "react-router";
import { SearchBar } from "../Index.js";
import { useTheme, useAuth } from "../../Contexts/Index";
import { useState } from "react";
import { Modal } from "../Index";

export function Nav({ showSearchBar, showLoginBtn, showThemeBtn }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { themeToggle, setThemeToggle } = useTheme();
  const {
    authState: { isUserLoggedIn },
  } = useAuth();
  return (
    <div>
      <nav className="nav-bar nav-bar--simple">
        <nav className="nav-bar--logo">
          <Link to="/">
            <img className="nav-bar__img--logo" src="/assets/image/HomePage/SooZoo-Logo.png" alt="SooZoo" />
          </Link>
        </nav>
        {showSearchBar && <SearchBar />}
        <ul className="nav-bar__list">
          {showLoginBtn && (
            <li className="nav-bar__item">
              <MdOutlineLogout
                size={25}
                color={themeToggle === "light" ? "black" : "white"}
                onClick={() => setIsOpen(!isOpen)}
              />
            </li>
          )}
          {showThemeBtn && (
            <li className="nav-bar__item">
              {themeToggle === "light" ? (
                <MdLightMode
                  size={25}
                  color={themeToggle === "light" ? "black" : "white"}
                  onClick={() => {
                    themeToggle === "light" ? setThemeToggle("dark") : setThemeToggle("light");
                  }}
                />
              ) : (
                <MdDarkMode
                  size={25}
                  color={themeToggle === "light" ? "black" : "white"}
                  onClick={() => {
                    themeToggle === "light" ? setThemeToggle("dark") : setThemeToggle("light");
                  }}
                />
              )}
            </li>
          )}
        </ul>
      </nav>
      {isOpen && <Modal value={{ isOpen, setIsOpen }} />}
    </div>
  );
}
