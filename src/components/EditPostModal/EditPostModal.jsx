import "./EditPostModal.css";
import { AiOutlineCamera, AiOutlineClose } from "react-icons/ai";
import { useUser, useTheme } from "../../Contexts/Index";
import { useState } from "react";

export const EditPostModal = ({ value }) => {
  const { item, editModalOpen, setEditModalOpen, editDeleteModal, setEditDeleteModal } = value;
  const { UpdatePostHandler } = useUser();
  const { themeToggle } = useTheme();
  const [postImage, setPostImage] = useState(item.image);
  const [postCaption, setPostCaption] = useState(item.caption);

  const fileHandler = (e) => {
    setPostImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="edit-post">
      <div className="edit-post-card">
        <div className="edit-post-card--container">
          <div className="edit-post-card__header--container">
            <div className="edit-post-card-profile--container">
              <img className="edit-post-card__img--profile" src={item.profile} />
              <p className="edit-post-card--userName">{item.username}</p>
            </div>
            <div className="edit-post-card-icon--container">
              <span className="edit-post-card-icon">
                <AiOutlineClose
                  size={20}
                  color={themeToggle === "light" ? "dark" : "white"}
                  onClick={() => {
                    setEditModalOpen(!editModalOpen);
                    setEditDeleteModal(!editDeleteModal);
                  }}
                />
              </span>
            </div>
          </div>
          <hr></hr>
          <div className="edit-post-card-post--container">
            <div className="edit-post-card__img--container">
              <img className="edit-post-card__img" src={postImage} />
              <label for="input__img" className="edit-post-card__label">
                <AiOutlineCamera size={60} color="#6521ff" />
                <input
                  type="file"
                  accept="image/png, image/jpg,image/jpeg"
                  className="edit-post-card__input--post"
                  id="input__img"
                  onChange={(e) => fileHandler(e)}
                />
              </label>
            </div>
          </div>
          <div className="edit-post-card__textarea">
            <textarea
              className="edit-post-card--caption"
              rows="4"
              defaultValue={item.caption}
              placeholder="Write a Caption..."
              onChange={(e) => setPostCaption(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="edit-post-card__btn--container">
          <button
            className="edit-post-card__btn"
            onClick={() => {
              UpdatePostHandler({ ...item, image: postImage, caption: postCaption }),
                setEditModalOpen(!editModalOpen),
                setEditDeleteModal(!editDeleteModal);
            }}
          >
            Update Post
          </button>
        </div>
      </div>
    </div>
  );
};
