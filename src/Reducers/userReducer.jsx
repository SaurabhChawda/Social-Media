export const Reducer = (state, action) => {
  switch (action.type) {
    case "Load_User":
      return {
        ...state,
        user: { ...action.payload },
      };
    case "Load_Users":
      return {
        ...state,
        usersList: [...action.payload],
      };
    case "Load_User_Posts":
      return {
        ...state,
        userPostsList: [...action.payload],
      };
    case "Load_Users_Posts":
      return {
        ...state,
        usersPostsList: [...action.payload],
      };
    case "Load_User_bookmarks":
      return {
        ...state,
        bookmarks: [...action.payload],
      };
    case "Load_Followers":
      return {
        ...state,
        userFollowers: [...action.payload.followers],
      };
    case "Load_Following":
      return {
        ...state,
        userFollowing: [...action.payload.following],
      };
    case "Create_Post":
      return {
        ...state,
        userPostsList: [...state.userPostsList, action.payload[action.payload.length - 1]],
      };
    case "Update_Users_Post":
      return {
        ...state,
        usersPostsList: [...action.payload],
      };
    case "Delete_Post":
      return {
        ...state,
        usersPostsList: [...action.payload],
      };
    case "Edit_User_Post":
      return {
        ...state,
        userPostsList: state.userPostsList.map((item) => (item._id === action.payload._id ? action.payload : item)),
      };
    case "Edit_User_Profile":
      return {
        ...state,
        user: { ...action.payload },
      };
    case "Add_To_Bookmarks":
      return {
        ...state,
        bookmarks: [...state.bookmarks, action.payload],
      };
    case "Remove_From_Bookmarks":
      return {
        ...state,
        bookmarks: state.bookmarks.filter((item) => item._id !== action.payload._id),
      };

    case "Add_To_Like":
      return {
        ...state,
        usersPostsList: [...action.payload],
      };
    case "Remove_From_Like":
      return {
        ...state,
        usersPostsList: [...action.payload],
      };
    case "Add_To_Following":
      return {
        ...state,
        userFollowing: [...action.payload],
      };
    case "Remove_From_Following":
      return {
        ...state,
        userFollowing: [...action.payload],
      };
    case "Reset":
      return {
        ...state,
        user: {},
        usersList: [],
        userPostsList: [],
        usersPostsList: [],
        bookmarks: [],
        likedPost: [],
        userFollowers: [],
        userFollowing: [],
      };
    default:
      return action.payload;
  }
};
