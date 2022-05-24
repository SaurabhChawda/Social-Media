import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { Reducer } from "../Reducers/userReducer";
import { useAuth } from "./Index";
import { toast } from "react-toastify";
const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const loggedInUser = JSON.parse(localStorage.getItem("login"));
  const { authState } = useAuth();
  const [state, dispatch] = useReducer(Reducer, { user: {}, allUser: [], post: [], allPost: [] });

  const CreateUserPost = (post) => {
    dispatch({ type: "update_All_Post", payload: post });
    dispatch({ type: "Create_User_Post", payload: post });
    (async () => {
      try {
        const {
          data: { posts },
        } = await axios.post("/api/posts", { post }, { headers: { authorization: loggedInUser.token } });
      } catch (error) {
        console.log(error);
        toast.error("Failed to Add");
      }
    })();
  };

  const DeleteUserPost = (post) => {
    dispatch({ type: "Delete_User_Post", payload: post._id });
    (async () => {
      try {
        const {
          data: { posts },
        } = await axios.delete(`/api/posts/${post._id}`, { headers: { authorization: loggedInUser.token } });
        console.log(posts);
      } catch (error) {
        console.log(error);
        toast.error("Failed to Add");
      }
    })();
  };
  const UpdateUserPost = (post) => {
    dispatch({ type: "Update_User_Post", payload: post });
    (async () => {
      try {
        const {
          data: { posts },
        } = await axios.post(
          `/api/posts/edit/${post._id}`,
          { post },
          { headers: { authorization: loggedInUser.token } }
        );
        console.log(posts);
      } catch (error) {
        console.log(error);
        toast.error("Failed to Add");
      }
    })();
  };
  const UpdateUserProfile = (profile) => {
    (async () => {
      try {
        const {
          data: { user },
        } = await axios.post(`/api/users/edit`, { profile }, { headers: { authorization: loggedInUser.token } });
        dispatch({ type: "Update_User_Profile", payload: user });
      } catch (error) {
        console.log(error);
        toast.error("Failed to Add");
      }
    })();
  };

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { users },
        } = await axios.get("/api/users");
        const { data } = await axios.get("/api/posts");
        const {
          data: { posts },
        } = await axios.get(`/api/posts/user/${loggedInUser.user.username}`);
        const {
          data: { user },
        } = await axios.get(`/api/users/${loggedInUser.user._id}`);
        dispatch({ type: "Reset" });
        dispatch({ type: "Load_User", payload: user });
        dispatch({ type: "Load_All_Users", payload: users });
        dispatch({ type: "Load_All_Post", payload: data.posts });
        dispatch({ type: "Load_User_Post", payload: posts });
      } catch (error) {
        console.log(error);
      }
    })();
  }, [authState]);

  return (
    <UserContext.Provider value={{ state, CreateUserPost, DeleteUserPost, UpdateUserPost, UpdateUserProfile }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { useUser, UserProvider };
