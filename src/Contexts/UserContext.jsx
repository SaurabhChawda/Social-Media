import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { Reducer } from "../Reducers/userReducer";
import { useAuth } from "./Index";
import { toast } from "react-toastify";
const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const loggedInUser = JSON.parse(localStorage.getItem("login"));
  const { authState } = useAuth();
  const [state, dispatch] = useReducer(Reducer, {
    user: {},
    userPostsList: [],
    usersList: [],
    usersPostsList: [],
    bookmarks: [],
    likedPost: [],
    userFollowers: [],
    userFollowing: [],
  });

  const CreatePostHandler = (post) => {
    (async () => {
      try {
        const {
          data: { posts },
        } = await axios.post("/api/posts", { ...post }, { headers: { authorization: loggedInUser.token } });
        dispatch({ type: "Create_Post", payload: posts });
        dispatch({ type: "Update_Users_Post", payload: posts });
      } catch (error) {
        console.log(error);
        toast.error("Failed to Add");
      }
    })();
  };
  const DeletePostHandler = (post) => {
    (async () => {
      try {
        const {
          data: { posts },
        } = await axios.delete(`/api/posts/${post._id}`, { headers: { authorization: loggedInUser.token } });
        console.log(posts);
        dispatch({ type: "Delete_Post", payload: posts });
      } catch (error) {
        console.log(error);
        toast.error("Failed to Add");
      }
    })();
  };
  const UpdatePostHandler = (post) => {
    dispatch({ type: "Edit_User_Post", payload: post });
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

  const UpdateProfileHandler = (profile) => {
    (async () => {
      try {
        const {
          data: { user },
        } = await axios.post(`/api/users/edit`, { profile }, { headers: { authorization: loggedInUser.token } });
        dispatch({ type: "Edit_User_Profile", payload: user });
      } catch (error) {
        console.log(error);
        toast.error("Failed to Add");
      }
    })();
  };
  const AddToBookmark = (post) => {
    dispatch({ type: "Add_To_Bookmarks", payload: post });
    (async () => {
      try {
        const {
          data: { bookmarks },
        } = await axios.post(`/api/users/bookmark/${post._id}`, {}, { headers: { authorization: loggedInUser.token } });
      } catch (error) {
        console.log(error);
        toast.error("Failed to Add");
      }
    })();
  };
  const RemoveFromBookmark = (post) => {
    dispatch({ type: "Remove_From_Bookmarks", payload: post });
    (async () => {
      try {
        const {
          data: { bookmarks },
        } = await axios.post(
          `/api/users/remove-bookmark/${post._id}`,
          {},
          {
            headers: { authorization: loggedInUser.token },
          }
        );
      } catch (error) {
        console.log(error);
        toast.error("Failed to Add");
      }
    })();
  };

  const LikePostHandler = (post) => {
    (async () => {
      try {
        const {
          data: { posts },
        } = await axios.post(
          `/api/posts/like/${post._id}`,
          {},
          {
            headers: { authorization: loggedInUser.token },
          }
        );
        dispatch({ type: "Add_To_Like", payload: posts });
        console.log(posts);
      } catch (error) {
        console.log(error);
        toast.error("Failed to Add");
      }
    })();
  };
  const DisLikePostHandler = (post) => {
    (async () => {
      try {
        const {
          data: { posts },
        } = await axios.post(
          `/api/posts/dislike/${post._id}`,
          {},
          {
            headers: { authorization: loggedInUser.token },
          }
        );
        dispatch({ type: "Remove_From_Like", payload: posts });
      } catch (error) {
        console.log(error);
        toast.error("Failed to Add");
      }
    })();
  };

  const FollowUserHandler = (userId) => {
    (async () => {
      try {
        const { data } = await axios.post(
          `/api/users/follow/${userId._id}`,
          {},
          {
            headers: { authorization: loggedInUser.token },
          }
        );
        dispatch({ type: "Add_To_Following", payload: data.user.following });
      } catch (error) {
        console.log(error);
      }
    })();
  };

  const UnfollowUserHandler = (userId) => {
    (async () => {
      try {
        const { data } = await axios.post(
          `/api/users/unfollow/${userId._id}`,
          {},
          {
            headers: { authorization: loggedInUser.token },
          }
        );
        dispatch({ type: "Remove_From_Following", payload: data.user.following });
      } catch (error) {
        console.log(error);
      }
    })();
  };

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { user },
        } = await axios.get(`/api/users/${loggedInUser.user._id}`);
        const {
          data: { users },
        } = await axios.get("/api/users");
        const {
          data: { posts },
        } = await axios.get(`/api/posts/user/${loggedInUser.user.username}`);
        const { data } = await axios.get("/api/posts");
        const {
          data: { bookmarks },
        } = await axios.get(`/api/users/bookmark`, { headers: { authorization: loggedInUser.token } });
        dispatch({ type: "Reset" });
        dispatch({ type: "Load_User", payload: user });
        dispatch({ type: "Load_Followers", payload: user });
        dispatch({ type: "Load_Following", payload: user });
        dispatch({ type: "Load_Users", payload: users });
        dispatch({ type: "Load_User_Posts", payload: posts });
        dispatch({ type: "Load_Users_Posts", payload: data.posts });
        dispatch({ type: "Load_User_bookmarks", payload: bookmarks });
      } catch (error) {
        console.log(error);
      }
    })();
  }, [authState]);

  console.log(state.userPostsList)
  return (
    <UserContext.Provider
      value={{
        state,
        CreatePostHandler,
        DeletePostHandler,
        UpdatePostHandler,
        UpdateProfileHandler,
        AddToBookmark,
        RemoveFromBookmark,
        LikePostHandler,
        DisLikePostHandler,
        FollowUserHandler,
        UnfollowUserHandler,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { useUser, UserProvider };
