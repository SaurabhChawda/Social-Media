import "./UserPostCard.css";
import { MdOutlineInsertComment } from "react-icons/md";
import { useState } from "react";
import { BsBookmark, BsBookmarkFill, BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineLike, AiTwotoneLike } from "react-icons/ai";
import { useTheme, useUser } from "../../Contexts/Index";
import { EditDeleteModal, Modal } from "../Index";
export const UserPostCard = () => {
  const [modalId, setModalId] = useState();
  const [editDeleteModal, setEditDeleteModal] = useState(false);
  const { themeToggle } = useTheme();
  const {
    state: { post },
  } = useUser();
  return (
    <div className="user-post-card--wrapper">
      {post.length !== 0 &&
        post.map((item) => {
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
                    <AiOutlineLike size={25} color={themeToggle === "light" ? "black" : "white"} />
                    <MdOutlineInsertComment size={25} color={themeToggle === "light" ? "black" : "white"} />
                    <BsBookmark size={25} color={themeToggle === "light" ? "black" : "white"} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
