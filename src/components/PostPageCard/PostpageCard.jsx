import "./PostPageCard.css";
import { MdOutlineInsertComment } from "react-icons/md";
import { BsBookmark, BsBookmarkFill, BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineLike, AiTwotoneLike, AiOutlineCamera } from "react-icons/ai";
import { useTheme } from "../../Contexts/Index";
import { useState } from "react";
export const PostPageCard = () => {
  const { themeToggle } = useTheme();
  const [postImage, setPostImage] = useState();
  const fileHandler = (e) => {
    setPostImage(e.target.files[0].name);
    setPostImage(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <div className="post">
      <div className="post-card">
        <div className="post-card--container">
          <div className="post-card__header--container">
            <div className="post-card-profile--container">
              <img className="post-card__img--profile" src="assets/image/Video-Image/Profile Image.jpg" alt="" />
              <p className="post-card--userName">Saurabh Chawda</p>
            </div>
          </div>
          <hr></hr>
          <div className="post-card-post--container">
            <div className="post-card__img--container">
              <img className="post-card__img" src={postImage} />
              <label for="input__img" className="post-card__label">
                <AiOutlineCamera size={60} color="#6521ff" />
                <input
                  type="file"
                  accept="image/png, image/jpg,image/jpeg"
                  className="post-card__input--post"
                  id="input__img"
                  onChange={(e) => fileHandler(e)}
                />
              </label>
            </div>
          </div>
          <div className="post-card__textarea">
            <textarea className="post-card--caption" rows="4" placeholder="Write a Caption..."></textarea>
          </div>
        </div>
        <div className="post-card__btn--container">
          <button className="post-card__btn">Post</button>
        </div>
      </div>
    </div>
  );
};
