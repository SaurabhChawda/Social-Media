import "./BookmarkCard.css";
import { MdOutlineInsertComment } from "react-icons/md";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { AiOutlineLike, AiTwotoneLike } from "react-icons/ai";
import { useTheme, useUser, useSearch } from "../../Contexts/Index";

export const BookmarkCard = () => {
  const { themeToggle } = useTheme();
  const {
    state: { bookmarks },
    AddToBookmark,
    RemoveFromBookmark,
  } = useUser();
  return (
    <div className="bookmark-card">
      {bookmarks.length === 0 ? (
        <h1 className="bookmark--empty">Your BookMarks is Empty !</h1>
      ) : (
        bookmarks.map((item) => {
          return (
            <div key={item._id} className="bookmark-card--container">
              <div className="bookmark-card__header-container">
                <div className="bookmark-card__img--container">
                  <img className="bookmark-card__img--Profile" src={item.profile} />
                  <p className="bookmark-card--userName">{item.username}</p>
                </div>
              </div>
              <hr></hr>
              <div className="bookmark-card__image--container">
                <img className="bookmark-card__image" src={item.image} />
              </div>
              <hr></hr>
              <div className="bookmark-card-Content--container">
                <p className="bookmark-card-content">{item.caption}</p>
              </div>
              <hr></hr>
              <div className="bookmark-card-footer--container">
                <div className="bookmark-card-primary-icon--container">
                  {bookmarks.length !== 0 ? (
                    bookmarks.some((value) => value._id === item._id) ? (
                      <BsBookmarkFill
                        size={25}
                        color={themeToggle === "light" ? "black" : "white"}
                        onClick={() => RemoveFromBookmark(item)}
                      />
                    ) : (
                      <BsBookmark
                        size={25}
                        color={themeToggle === "light" ? "black" : "white"}
                        onClick={() => AddToBookmark(item)}
                      />
                    )
                  ) : (
                    <BsBookmark
                      size={25}
                      color={themeToggle === "light" ? "black" : "white"}
                      onClick={() => AddToBookmark(item)}
                    />
                  )}
                </div>
                <div className="bookmark-card-secondary-icon--container"></div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};
