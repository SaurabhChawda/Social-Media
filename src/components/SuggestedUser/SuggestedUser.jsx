import "./SuggestedUser.css";
import { useUser } from "../../Contexts/Index";
export const SuggestedUser = () => {
  const {
    state: { usersList, user, userFollowers, userFollowing },
    FollowUserHandler,
    UnfollowUserHandler,
  } = useUser();
  return (
    <div>
      {usersList.length !== 0 &&
        usersList
          .filter((filteritem) => filteritem._id !== user._id)
          .map((item) => {
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
                <div className="suggestedUser__btn-Container">
                  {userFollowing.some((value) => value._id === item._id) ? (
                    <button className="suggestedUser__btn-follow" onClick={() => UnfollowUserHandler(item)}>
                      Unfollow
                    </button>
                  ) : (
                    <button className="suggestedUser__btn-follow" onClick={() => FollowUserHandler(item)}>
                      Follow
                    </button>
                  )}
                </div>
              </div>
            );
          })}
    </div>
  );
};
