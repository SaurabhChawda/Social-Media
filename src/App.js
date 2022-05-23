import "./App.css";
import { Home, Post, Profile } from "./Pages/Index";
import { Route, Routes } from "react-router-dom";
import { useTheme } from "./Contexts/Index";
function App() {
  const { themeToggle } = useTheme();
  return (
    <div className="app" theme={themeToggle}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/post" element={<Post />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </div>
  );
}

export default App;
