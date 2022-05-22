import "./SuggestedUser.css";
export const SuggestedUser = () => {
  return (
    <div className="suggestedUser-card">
      <div className="suggestedUser-card--container">
        <div className="suggestedUser-card__img--container">
          <img className="suggestedUser-card__img--Profile" src="assets/image/Video-Image/Profile Image.jpg" alt="" />
        </div>
        <div className="suggestedUser-name--container">
          <p className="suggestedUser--name suggestedUser-card-userName">Sauuu__ra__bh</p>
          <p className="suggestedUser--name suggestedUser-card-firstName">Saurabh Chawda</p>
        </div>
      </div>
    </div>
  );
};
