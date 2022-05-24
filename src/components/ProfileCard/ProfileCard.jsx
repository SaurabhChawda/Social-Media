import "./ProfileCard.css";
import { useState } from "react";
import { UserPostCard, EditProfileModal } from "../Index";
import { useUser } from "../../Contexts/Index";
export const ProfileCard = () => {
  const [editProfileModalOpen, setEditProfileModalopen] = useState(false);
  const {
    state: { post, user },
  } = useUser();
  // const user = JSON.parse(localStorage.getItem("login"));
  return (
    <>
      {Object.keys(user).length !== 0 && (
        <div className="profileCard">
          <div className="profielCard--container">
            <div className="profileCard--header">
              <fieldset className="profileCard-primary--container">
                <legend className="profileCard-userName--container">
                  <h4 className="profileCard-userName">{user.username}</h4>
                </legend>
                <div className="profileCard-content--Container">
                  <div className="profileCard__img--container">
                    <img className="profileCard__img" src={user.profile} />
                  </div>
                  <div className="profileCard-userData--container">
                    <div className="profileCard-userData">
                      <span className="profileCard-userData--demo">
                        <p>{post.length}</p>
                        <p>Posts</p>
                      </span>
                      <span className="profileCard-userData--demo">
                        <p>{user.followers.length}</p>
                        <p>Followers</p>
                      </span>
                      <span className="profileCard-userData--demo">
                        <p>{user.following.length}</p>
                        <p>Following</p>
                      </span>
                    </div>
                    <div className="profileCard-userFullName--Container">
                      <p className="profileCard-userFullName">{user.firstName + " " + user.lastName}</p>
                    </div>
                    <div className="profileCard-userbio--Container">
                      <p className="profileCard-userbio">{user.bio}</p>
                    </div>
                    <div className="profileCard-userWebsiteLink--Container">
                      <a href={user.website} className="profileCard-userWebsiteLink">
                        {user.website}
                      </a>
                    </div>
                  </div>
                </div>
              </fieldset>
              <div className="profileCard-secondary--container">
                <div className="profileCard__btn--container">
                  <button
                    className="profileCard__btn--edit"
                    onClick={() => setEditProfileModalopen(!editProfileModalOpen)}
                  >
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>
            <div className="profileCard-post--Container">
              <UserPostCard />
            </div>
          </div>
          {editProfileModalOpen && <EditProfileModal value={{ user, editProfileModalOpen, setEditProfileModalopen }} />}
        </div>
      )}
    </>
  );
};
