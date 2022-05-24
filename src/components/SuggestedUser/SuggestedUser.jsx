import "./SuggestedUser.css";
import { useUser } from "../../Contexts/Index";
export const SuggestedUser = () => {
  const {
    state: { allUser },
  } = useUser();
  return (
    <div>
      {allUser.length !== 0 &&
        allUser.map((item) => {
          return (
            <div key={item._id} className="suggestedUser-card">
              <div className="suggestedUser-card--container">
                <div className="suggestedUser-card__img--container">
                  <img className="suggestedUser-card__img--Profile" src={item.profile} />
                </div>
                <div className="suggestedUser-name--container">
                  <p className="suggestedUser--name suggestedUser-card-userName">{item.username}</p>
                  <p className="suggestedUser--name suggestedUser-card-firstName">{`${item.firstName} ${item.lastName}`}</p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
