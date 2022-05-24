import "./PostPageCard.css";
import { AiOutlineCamera } from "react-icons/ai";
import { useUser } from "../../Contexts/Index";
import { useState, useEffect } from "react";

export const PostPageCard = () => {
  const { CreateUserPost } = useUser();
  const [postImage, setPostImage] = useState(" ");
  const [postCaption, setPostCaption] = useState(" ");
  const [disblebtn, setDisableBtn] = useState(true);
  const fileHandler = (e) => {
    setPostImage(URL.createObjectURL(e.target.files[0]));
  };
  useEffect(() => {
    if (postImage !== " " && postCaption !== " ") {
      setDisableBtn(!disblebtn);
    }
  }, [postImage, postCaption]);

  return (
    <div className="post">
      <div className="post-card">
        <div className="post-card--container">
          <div className="post-card__header--container">
            <div className="post-card-profile--container">
              <img className="post-card__img--profile" src="/assets/image/Profile/Adarsh.jpg" />
              <p className="post-card--userName">Saurabh Chawda</p>
            </div>
          </div>
          <hr></hr>
          <div className="post-card-post--container">
            <div className="post-card__img--container">
              <img className="post-card__img" src={postImage} />
              <label htmlFor="input__img" className="post-card__label">
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
            <textarea
              className="post-card--caption"
              rows="4"
              placeholder="Write a Caption..."
              onChange={(e) => setPostCaption(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="post-card__btn--container">
          <button
            className="post-card__btn"
            disabled={disblebtn}
            onClick={() => CreateUserPost({ image: postImage, caption: postCaption })}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};
