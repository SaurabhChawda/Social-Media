import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { Home, Post, Profile, Login, SignUp, Bookmark } from "./Pages/Index";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute.jsx";
import { Route, Routes } from "react-router-dom";
import { useTheme } from "./Contexts/Index";
import { loadUsersPostsList, loadUserPostList, loadUserBookamrks } from "./features/Posts/PostSlice.js";
import { getUsersList } from "./features/Users/UserSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.auth);
  useEffect(() => {
    if (loggedInUser.isUserLoggedIn) {
      dispatch(loadUsersPostsList(loggedInUser));
      dispatch(loadUserPostList(loggedInUser));
      dispatch(loadUserBookamrks(loggedInUser));
      dispatch(getUsersList(loggedInUser));
    }
  }, [loggedInUser]);

  const { themeToggle } = useTheme();
  return (
    <div>
      <ToastContainer autoClose={2000} />
      <div className="app" theme={themeToggle}>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/post"
            element={
              <PrivateRoute>
                <Post />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/bookmark"
            element={
              <PrivateRoute>
                <Bookmark />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
