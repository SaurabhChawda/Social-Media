import "./NavForTab.css";
import { Link } from "react-router-dom";
import { MdOutlineHome, MdOutlinePostAdd } from "react-icons/md";
import { BsBookmark } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
export const NavForTab = () => {
  return (
    <div className="nav-bar-tab">
      <div className="nav-bar-tab-container">
        <Link to="/">
          <MdOutlineHome size={30} color="white" />
        </Link>
        <BsBookmark size={20} color="white" />
        <Link to="/post">
          <MdOutlinePostAdd size={30} color="white" />
        </Link>
        <Link to="/profile">
          <CgProfile size={30} color="white" />
        </Link>
      </div>
    </div>
  );
};
