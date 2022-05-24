export const Reducer = (state, action) => {
  switch (action.type) {
    case "Load_User":
      return {
        ...state,
        user: { ...action.payload },
      };
    case "Update_User_Profile":
      return {
        ...state,
        user: { ...action.payload },
      };
    case "Load_All_Users":
      return {
        ...state,
        allUser: [...state.allUser, ...action.payload],
      };
    case "update_All_Post":
      return {
        ...state,
        allPost: [...state.allPost, action.payload],
      };
    case "Load_All_Post":
      return {
        ...state,
        allPost: [...state.allPost, ...action.payload],
      };
    case "Load_User_Post":
      return {
        ...state,
        post: [...state.post, ...action.payload],
      };
    case "Create_User_Post":
      return {
        ...state,
        post: [...state.post, action.payload],
      };
    case "Delete_User_Post":
      return {
        ...state,
        post: state.post.filter((item) => item._id !== action.payload),
      };
    case "Update_User_Post":
      return {
        ...state,
        post: state.post.map((item) => (item._id === action.payload._id ? action.payload : item)),
      };
    case "Reset":
      return {
        ...state,
        user: {},
        allUser: [],
        post: [],
        allPost: [],
      };
    default:
      return action.payload;
  }
};
