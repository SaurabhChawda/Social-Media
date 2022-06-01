import "./login.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Nav, NavForTab } from "../../components/Index";
import { useDispatch } from "react-redux";
import { loginUser } from "../../features/Auth/AuthSlice";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userLogin, setUserLogin] = useState({ username: "", password: "" });
  const [showpassword, setShowPassword] = useState("password");

  const loginHandler = (event, user) => {
    event.preventDefault();
    if (user.username === "" || user.password === "") {
      console.log("Incorrect Password");
    } else {
      loginCredentials(user);
    }
  };

  const loginCredentials = async (user) => {
    try {
      await dispatch(loginUser({ username: user.username, password: user.password })).unwrap();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="login-page--container">
      <Nav showSearchBar={false} showLoginBtn={false} showThemeBtn={true} />
      <NavForTab />
      <main className="login__main--container">
        <section className="login--container">
          <div className="login">
            <form className="login-form">
              <div className="login-form--primary-container">
                <fieldset className="login-form__fieldset login-form__fieldset--gmail">
                  <legend className="login-form__legend login-form--username" htmlFor="userName">
                    <b>User Name</b>
                  </legend>
                  <input
                    className="login-form__input-demo login-form__input--username"
                    placeholder="User Name"
                    name="uname"
                    required
                    onChange={(event) => setUserLogin({ ...userLogin, username: event.target.value })}
                  />
                </fieldset>
                <fieldset className="login-form__fieldset login-form__fieldset--password">
                  <legend className="login-form__legend login-form--password" htmlFor="password">
                    <b>Password</b>
                  </legend>
                  <div className="login-form--password">
                    <input
                      className="login-form__input-demo login-form__input--password"
                      type={showpassword}
                      placeholder="Enter Password"
                      name="password"
                      required
                      onChange={(event) => setUserLogin({ ...userLogin, password: event.target.value })}
                    />
                    <i className="login-form__input--password-hide-icon">
                      <img
                        src={
                          showpassword === "password"
                            ? "/assets/image/SignUp/eyeHide.png"
                            : "/assets/image/SignUp/eyeShow.png"
                        }
                        alt="Show Password"
                        onClick={() => setShowPassword(showpassword === "password" ? "text" : "password")}
                      />
                    </i>
                  </div>
                </fieldset>
              </div>
              <div className="login-form--remember-forget-password">
                <button className="login-form__btn--forget-password">Forget password ?</button>
              </div>
              <div className="login-form--submit">
                <button className="login-form__btn--submit" onClick={(event) => loginHandler(event, userLogin)}>
                  Login
                </button>
                <button
                  className="login-form__btn--submit login-form__btn--submit-guest"
                  onClick={(event) => loginHandler(event, { username: "Sauuu__ra__bh", password: "admin" })}
                >
                  Login As Guest
                </button>
              </div>
              <div className="login-form--new-account">
                <small className="login-form__btn--new-account login-form__btn--new-account-text">
                  Don't have an Account ?
                </small>
                <NavLink className="login-form__btn--new-account" to="/signUp/">
                  SignUp
                </NavLink>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
