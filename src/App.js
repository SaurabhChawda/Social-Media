import "./App.css";
import { Home, Post, Profile, Login, SignUp } from "./Pages/Index";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute.jsx";
import { Route, Routes } from "react-router-dom";
import { useTheme } from "./Contexts/Index";

function App() {
  const { themeToggle } = useTheme();
  return (
    <div className="app" theme={themeToggle}>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/post"
          element={
            <PrivateRoute>
              <Post />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
