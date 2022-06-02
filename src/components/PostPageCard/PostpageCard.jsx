import "./PostPageCard.css";
import { AiOutlineCamera } from "react-icons/ai";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CreatePostHandler } from "../../features/Posts/PostSlice";
import { useSelector } from "react-redux";
export const PostPageCard = () => {
  const user = useSelector((state) => state.auth.user);
  const loggedInUserToken = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
  }, [loggedInUserToken, postImage, postCaption]);

  return (
    <div className="post">
      <div className="post-card">
        <div className="post-card--container">
          <div className="post-card__header--container">
            <div className="post-card-profile--container">
              <img className="post-card__img--profile" src={user.profile} />
              <p className="post-card--userName">{user.username}</p>
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
                  accept="image/*"
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
            onClick={() => {
              dispatch(
                CreatePostHandler({
                  post: {
                    image: postImage,
                    caption: postCaption,
                    profile: user.profile,
                    username: user.username,
                  },
                  token: { loggedInUserToken },
                })
              ),
                navigate("/profile");
            }}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};
