import "./SuggestedUser.css";
import { useDispatch, useSelector } from "react-redux";
import { FollowUserHandler, UnfollowUserHandler } from "../../features/Users/UserSlice.js";

export const SuggestedUser = () => {
  const dispatch = useDispatch();
  const usersList = useSelector((state) => state.user.usersList);
  const user = useSelector((state) => state.auth.user);
  const loggedInUserToken = useSelector((state) => state.auth.token);
  const userFollowing = useSelector((state) => state.user.userFollowing);

  return (
    <div>
      {usersList.length !== 0 &&
        user !== null &&
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
                    <button
                      className="suggestedUser__btn-follow"
                      onClick={() => dispatch(UnfollowUserHandler({ userId: item, token: loggedInUserToken }))}
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      className="suggestedUser__btn-follow"
                      onClick={() => dispatch(FollowUserHandler({ userId: item, token: loggedInUserToken }))}
                    >
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
