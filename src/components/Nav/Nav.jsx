import "./nav.css";
import { Link } from "react-router-dom";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { SearchBar } from "../Index.js";
import { useTheme } from "../../Contexts/Index";

export function Nav({ hideComponent }) {
  const { themeToggle, setThemeToggle } = useTheme();
  return (
    <div>
      {/* Navigation Bar Desktop */}
      <nav className="nav-bar nav-bar--simple">
        <nav className="nav-bar--logo">
          <Link to="/">
            <img className="nav-bar__img--logo" src="assets/image/HomePage/SooZoo-Logo.png" alt="Discover" />
          </Link>
        </nav>
        {hideComponent && <SearchBar />}
        <ul className="nav-bar__list">
          {hideComponent && (
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
    </div>
  );
}
