import "./EditProfileModal.css";
import { AiOutlineCamera, AiOutlineClose } from "react-icons/ai";
import { useUser, useTheme } from "../../Contexts/Index";
import { useState } from "react";

export const EditProfileModal = ({ value }) => {
  const { user, editProfileModalOpen, setEditProfileModalopen } = value;
  const { UpdateUserProfile } = useUser();
  const { themeToggle } = useTheme();
  const [userImage, setUserImage] = useState(user.profile);
  const [userBio, setUserBio] = useState(user.bio);
  const [userName, setUserName] = useState(user.username);
  const [userWebsite, setUserWebsite] = useState(user.website);

  const fileHandler = (e) => {
    setUserImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="edit-profile">
      <div className="edit-profile-card">
        <div className="edit-profile-card--container">
          <div className="edit-profile-card__header--container">
            <div className="edit-profile-card-profile--container">
              <img className="edit-profile-card__img--profile" src="/assets/image/Profile/Adarsh.jpg" />
              <p className="edit-profile-card--userName">{user.firstName + " " + user.lastName}</p>
            </div>
            <div className="edit-profile-card-icon--container">
              <span className="edit-profile-card-icon">
                <AiOutlineClose
                  size={20}
                  color={themeToggle === "light" ? "dark" : "white"}
                  onClick={() => {
                    setEditProfileModalopen(!editProfileModalOpen);
                  }}
                />
              </span>
            </div>
          </div>
          <hr></hr>
          <div className="edit-profile-card-post--container">
            <div className="edit-profile-card__img--container">
              <img className="edit-profile-card__img" src={userImage} />
              <label for="input__img" className="edit-profile-card__label">
                <AiOutlineCamera size={60} color="#6521ff" />
                <input
                  type="file"
                  accept="image/png, image/jpg,image/jpeg"
                  className="edit-profile-card__input--post"
                  id="input__img"
                  onChange={(e) => fileHandler(e)}
                />
              </label>
            </div>
          </div>
          <div className="edit-profile-card__input">
            <label htmlFor="Bio">Bio</label>
            <input
              className="edit-profile-card__input--demo"
              defaultValue={user.bio}
              placeholder="Bio"
              onChange={(e) => setUserBio(e.target.value)}
            />
          </div>
          <div className="edit-profile-card__input">
            <label htmlFor="userName">UserName</label>
            <input
              className="edit-profile-card__input--demo"
              defaultValue={user.username}
              placeholder="userName"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="edit-profile-card__input">
            <label htmlFor="website">Website</label>
            <input
              className="edit-profile-card__input--demo"
              defaultValue={user.website}
              placeholder="Website"
              onChange={(e) => setUserWebsite(e.target.value)}
            />
          </div>
        </div>
        <div className="edit-profile-card__btn--container">
          <button
            className="edit-profile-card__btn"
            onClick={() => {
              UpdateUserProfile({
                ...user.user,
                profile: userImage,
                bio: userBio,
                username: userName,
                website: userWebsite,
              }),
                setEditProfileModalopen(!editProfileModalOpen);
            }}
          >
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};
