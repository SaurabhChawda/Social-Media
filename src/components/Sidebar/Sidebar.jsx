import "./Sidebar.css";
import { MdOutlineHome, MdOutlinePostAdd } from "react-icons/md";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { useTheme } from "../../Contexts/ThemeContext";
import { NavLink } from "react-router-dom";
export function Sidebar() {
  const { themeToggle } = useTheme();
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <div className="sidebar__list--container">
          <NavLink to="/" className="sidebar__list">
              <MdOutlineHome size={30} color={themeToggle === "light" ? "black" : "white"} />
            <h3 className="sidebar--content">Home</h3>
          </NavLink>
          <li className="sidebar__list">
            <BsBookmark size={25} color={themeToggle === "light" ? "black" : "white"} />
            <h3 className="sidebar--content">BookMarks</h3>
          </li>
          <NavLink to="/post" className="sidebar__list">
            <MdOutlinePostAdd size={30} color={themeToggle === "light" ? "black" : "white"} />
            <h3 className="sidebar--content">Post</h3>
          </NavLink>
          <li className="sidebar__list">
            <CgProfile size={25} color={themeToggle === "light" ? "black" : "white"} />
            <h3 className="sidebar--content">Profile</h3>
          </li>
        </div>
      </div>
    </div>
  );
}
