import "./LogoutModal.css";
import { useAuth } from "../../Contexts/Index";
export const LogoutModal = ({ value }) => {
  const { logoutModal, setLogoutModal } = value;
  const { logoutCredentials } = useAuth();
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
