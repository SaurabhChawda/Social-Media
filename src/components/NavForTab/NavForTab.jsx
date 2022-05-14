import "./NavForTab.css";
import { MdPlaylistAdd, MdWatchLater, MdOutlineHome, MdOutlineHistoryToggleOff } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
export const NavForTab = () => {
  return (
    <div className="nav-bar-tab">
      <div className="nav-bar-tab-container">
          <MdOutlineHome size={30} color="white" />
          <MdWatchLater size={28} color="white" />
          <MdPlaylistAdd size={30} color="white" />
          <AiFillLike size={30} color="white" />
          <MdOutlineHistoryToggleOff size={30} color="white" />
      </div>
    </div>
  );
};
