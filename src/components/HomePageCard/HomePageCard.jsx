import "./HomePageCard.css";
import { MdOutlineInsertComment } from "react-icons/md";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { AiOutlineLike, AiTwotoneLike } from "react-icons/ai";
import { useTheme, useUser, useSearch } from "../../Contexts/Index";

export const HomePageCard = () => {
  const { themeToggle } = useTheme();
  const {
    state: { allPost },
  } = useUser();
  const { updatedData } = useSearch();
  return (
    <div>
      {updatedData.length !== 0 &&
        updatedData.map((item) => {
          return (
            <div key={item._id} className="home-card">
              <div className="home-card--container">
                <div className="home-card__header-container">
                  <div className="home-card__img--container">
                    <img className="home-card__img--Profile" src={item.profile} />
                    <p className="home-card--userName">{item.username}</p>
                  </div>
                </div>
                <hr></hr>
                <div className="home-card__image--container">
                  <img className="home-card__image" src={item.image} />
                </div>
                <hr></hr>
                <div className="home-card-Content--container">
                  <p className="home-card-content">{item.caption}</p>
                </div>
                <hr></hr>
                <div className="home-card-footer--container">
                  <div className="home-card-primary-icon--container">
                    <AiOutlineLike size={25} color={themeToggle === "light" ? "black" : "white"} />
                    <MdOutlineInsertComment size={25} color={themeToggle === "light" ? "black" : "white"} />
                    <BsBookmark size={25} color={themeToggle === "light" ? "black" : "white"} />
                  </div>
                  <div className="home-card-secondary-icon--container"></div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
