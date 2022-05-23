import "./ProfileCard.css";
export const ProfileCard = () => {
  return (
    <div className="profileCard">
      <div className="profielCard--container">
        <div className="profileCard--header">
          <fieldset className="profileCard-primary--container">
            <legend className="profileCard-userName--container">
              <h4 className="profileCard-userName">saurabh</h4>
            </legend>
            <div className="profileCard-content--Container">
              <div className="profileCard__img--container">
                <img src="/assets/image/Video-Image/Profile Image.jpg" className="profileCard__img" />
              </div>
              <div className="profileCard-userData--container">
                <div className="profileCard-userData">
                  <span className="profileCard-userData--demo">
                    <p>5</p>
                    <p>Posts</p>
                  </span>
                  <span className="profileCard-userData--demo">
                    <p>10</p>
                    <p>Followers</p>
                  </span>
                  <span className="profileCard-userData--demo">
                    <p>10</p>
                    <p>Following</p>
                  </span>
                </div>
                <div className="profileCard-userbio--Container">
                  <p className="profileCard-userbio">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, nulla, facilis in voluptas
                    expedita enim qui fuga sapiente placeat nemo similique officiis porro, error ipsam ducimus quia
                    asperiores rerum a.
                  </p>
                </div>
                <div className="profileCard-userWebsiteLink--Container">
                  <a href="https://trendy-t.netlify.app/" className="profileCard-userWebsiteLink">
                    https://trendy-t.netlify.app/
                  </a>
                </div>
              </div>
            </div>
          </fieldset>
          <div className="profileCard-secondary--container">
            <div className="profileCard__btn--container">
              <button className="profileCard__btn--edit">Edit Profile</button>
            </div>
          </div>
        </div>
        <div className="profileCard-post--Container">

        </div>
      </div>
    </div>
  );
};