import "./BookmarkCard.css";
import { BsBookmarkFill } from "react-icons/bs";
import { useTheme } from "../../Contexts/Index";
import { useSelector, useDispatch } from "react-redux";
import { RemoveFromBookmark } from "../../features/Posts/PostSlice";
export const BookmarkCard = () => {
  const bookmarks = useSelector((state) => state.post.bookmarks);
  const loggedInUserToken = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const { themeToggle } = useTheme();
  return (
    <div className="bookmark-card">
      {bookmarks.length === 0 ? (
        <h1 className="bookmark--empty">No BookMarks yet!</h1>
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
                  {bookmarks.length !== 0 && bookmarks.some((value) => value._id === item._id) && (
                    <BsBookmarkFill
                      size={25}
                      color={themeToggle === "light" ? "black" : "white"}
                      onClick={() => dispatch(RemoveFromBookmark({ post: item, token: loggedInUserToken }))}
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
