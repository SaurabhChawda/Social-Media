import "./LogoutModal.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../features/Auth/AuthSlice";
export const LogoutModal = ({ value }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { logoutModal, setLogoutModal } = value;

  const logoutCredentials = () => {
    try {
      dispatch(logOut());
      localStorage?.removeItem("login");
      navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="overlay">
      <div className="modal">
        <h3 className="modal__text">Are you sure you want Logout ?</h3>
        <div className="modal__btn--container">
          <button
            className="modal__btn--demo modal__btn--yes"
            onClick={() => {
              setLogoutModal(!logoutModal);
              logoutCredentials();
            }}
          >
            Yes
          </button>
          <button className="modal__btn--demo modal__btn--no" onClick={() => setLogoutModal(!logoutModal)}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};
