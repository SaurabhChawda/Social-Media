import "./HomePageCard.css";
import { useState } from "react";
import { MdOutlineInsertComment } from "react-icons/md";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { AiOutlineLike, AiTwotoneLike } from "react-icons/ai";
import { useTheme, useSearch } from "../../Contexts/Index";
import { useSelector, useDispatch } from "react-redux";
import { AddToBookmark, RemoveFromBookmark, LikePostHandler, DisLikePostHandler } from "../../features/Posts/PostSlice";

export const HomePageCard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const loggedInUserToken = useSelector((state) => state.auth.token);
  const bookmarks = useSelector((state) => state.post.bookmarks);
  const [commentToggle, setCommentToggle] = useState(false);
  const [commentId, setCommentId] = useState();
  const { themeToggle } = useTheme();
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
                    <div className="home-card-like--icon">
                      <span>
                        {item.likes.likedBy !== 0 ? (
                          item.likes.likedBy.some((value) => value.username === user.username) ? (
                            <AiTwotoneLike
                              size={25}
                              color={themeToggle === "light" ? "black" : "white"}
                              onClick={() => {
                                dispatch(DisLikePostHandler({ post: item, token: loggedInUserToken }));
                              }}
                            />
                          ) : (
                            <AiOutlineLike
                              size={25}
                              color={themeToggle === "light" ? "black" : "white"}
                              onClick={() => {
                                dispatch(LikePostHandler({ post: item, token: loggedInUserToken }));
                              }}
                            />
                          )
                        ) : (
                          <AiOutlineLike
                            size={25}
                            color={themeToggle === "light" ? "black" : "white"}
                            onClick={() => {
                              dispatch(LikePostHandler({ post: item, token: loggedInUserToken }));
                            }}
                          />
                        )}
                      </span>
                      <span className="home-card-like--icon-text">
                        {item.likes.likeCount > 0 && item.likes.likeCount} Likes
                      </span>
                    </div>
                    <MdOutlineInsertComment
                      size={25}
                      color={themeToggle === "light" ? "black" : "white"}
                      onClick={() => {
                        setCommentToggle(!commentToggle), setCommentId(item._id);
                      }}
                    />

                    {bookmarks.length !== 0 ? (
                      bookmarks.some((value) => value._id === item._id) ? (
                        <BsBookmarkFill
                          size={25}
                          color={themeToggle === "light" ? "black" : "white"}
                          onClick={() => dispatch(RemoveFromBookmark({ post: item, token: loggedInUserToken }))}
                        />
                      ) : (
                        <BsBookmark
                          size={25}
                          color={themeToggle === "light" ? "black" : "white"}
                          onClick={() => dispatch(AddToBookmark({ post: item, token: loggedInUserToken }))}
                        />
                      )
                    ) : (
                      <BsBookmark
                        size={25}
                        color={themeToggle === "light" ? "black" : "white"}
                        onClick={() => dispatch(AddToBookmark({ post: item, token: loggedInUserToken }))}
                      />
                    )}
                  </div>
                  <div className="home-card-secondary-icon--container"></div>
                </div>
              </div>
              {commentToggle && item._id === commentId && (
                <div>
                  <hr></hr>
                  <div className="home-card-comment-box--container">
                    <div className="home-card-comment__img--container">
                      <img className="home-card-comment__img--Profile" src={item.profile} />
                    </div>
                    <div className="home-card-comment--container">
                      <p className="home-card-comment--name home-card-comment-userName">{item.username}</p>
                      <p className="home-card-comment--name home-card-comment-firstName">Amazing Picture</p>
                    </div>
                  </div>
                  <div className="home-card-comment-input-container">
                    <input className="home-card-comment-input" type="text" placeholder="Write a Comment" />
                    <button className="home-card-comment-send__btn">send</button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
};
