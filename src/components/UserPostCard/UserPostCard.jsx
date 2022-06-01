import "./UserPostCard.css";
import { MdOutlineInsertComment } from "react-icons/md";
import { useState } from "react";
import { BsBookmark, BsBookmarkFill, BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineLike, AiTwotoneLike } from "react-icons/ai";
import { useTheme } from "../../Contexts/Index";
import { EditDeleteModal, Modal } from "../Index";
import { useSelector, useDispatch } from "react-redux";
import { AddToBookmark, RemoveFromBookmark, LikePostHandler, DisLikePostHandler } from "../../features/Posts/PostSlice";

export const UserPostCard = () => {
  const dispatch = useDispatch();
  const bookmarks = useSelector((state) => state.post.bookmarks);
  const usersPostsList = useSelector((state) => state.post.usersPostsList);
  const user = useSelector((state) => state.auth.user);
  const loggedInUserToken = useSelector((state) => state.auth.token);
  const [modalId, setModalId] = useState();
  const [editDeleteModal, setEditDeleteModal] = useState(false);
  const { themeToggle } = useTheme();

  return (
    <div className="user-post-card--wrapper">
      {usersPostsList.length !== 0 &&
        usersPostsList
          .filter((value) => value.username === user.username)
          .map((item) => {
            return (
              <div key={item._id} className="user-post-card">
                <div className="user-post-card--container">
                  <div className="user-post-card__header-container">
                    <div className="user-post-card__img--container">
                      <img className="user-post-card__img--Profile" src={item.profile} alt="" />
                      <p className="user-post-card--userName">{item.username}</p>
                    </div>
                    <div className="user-post-card-icon--container">
                      <span className="user-post-card-icon">
                        <BsThreeDotsVertical
                          size={20}
                          color={themeToggle === "light" ? "black" : "white"}
                          onClick={() => {
                            setEditDeleteModal(!editDeleteModal);
                            setModalId(item._id);
                          }}
                        />
                        {editDeleteModal && item._id === modalId && (
                          <EditDeleteModal value={{ item, editDeleteModal, setEditDeleteModal }} />
                        )}
                      </span>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="user-post-card__image--container">
                    <img className="user-post-card__image" src={item.image} alt="" />
                  </div>
                  <hr></hr>
                  <div className="user-post-card-Content--container">
                    <p className="user-post-card-content">{item.caption}</p>
                  </div>
                  <hr></hr>
                  <div className="user-post-card-footer--container">
                    <div className="user-post-card-primary-icon--container">
                      <div className="user-post-card-like--icon">
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
                        <span className="user-post-card-like--icon-text">
                          {item.likes.likeCount > 0 && item.likes.likeCount} Likes
                        </span>
                      </div>
                      <MdOutlineInsertComment size={25} color={themeToggle === "light" ? "black" : "white"} />
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
                  </div>
                </div>
              </div>
            );
          })}
    </div>
  );
};
