import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loadUserPostList = createAsyncThunk("Post/loadUserPostList", async (user) => {
  try {
    const {
      data: { posts },
    } = await axios.get(`/api/posts/user/${user.user.username}`);
    return posts;
  } catch (error) {
    console.log(error);
  }
});
export const loadUsersPostsList = createAsyncThunk("Post/loadUsersPostsList", async () => {
  try {
    const {
      data: { posts },
    } = await axios.get("/api/posts");
    return posts;
  } catch (error) {
    console.log(error);
  }
});

export const loadUserBookamrks = createAsyncThunk("Post/loadUserBookmarks", async (user) => {
  try {
    const {
      data: { bookmarks },
    } = await axios.get(`/api/users/bookmark`, { headers: { authorization: user.token } });
    return bookmarks;
  } catch (error) {
    console.log(error);
  }
});

export const CreatePostHandler = createAsyncThunk("Post/CreatePostHandler", async ({ post, token }) => {
  try {
    const {
      data: { posts },
    } = await axios.post("/api/posts", { ...post }, { headers: { authorization: token.loggedInUserToken } });
    return posts;
  } catch (error) {
    console.log(error);
  }
});

export const DeletePostHandler = createAsyncThunk("Post/DeletePostHandler", async ({ post, user }) => {
  try {
    const {
      data: { posts },
    } = await axios.delete(`/api/posts/${post._id}`, { headers: { authorization: user.token } });
    return { posts: posts, user: user.user };
  } catch (error) {
    console.log(error);
  }
});

export const UpdatePostHandler = createAsyncThunk("Post/UpdatePostHandler", async ({ post, token }) => {
  try {
    const {
      data: { posts },
    } = await axios.post(`/api/posts/edit/${post._id}`, post, { headers: { authorization: token } });
    return posts;
  } catch (error) {
    console.log(error);
  }
});
export const AddToBookmark = createAsyncThunk("User/AddToBookmark", async ({ post, token }) => {
  try {
    const {
      data: { bookmarks },
    } = await axios.post(`/api/users/bookmark/${post._id}`, {}, { headers: { authorization: token } });
    return bookmarks;
  } catch (error) {
    console.log(error);
  }
});

export const RemoveFromBookmark = createAsyncThunk("User/RemoveFromBookmark", async ({ post, token }) => {
  try {
    const {
      data: { bookmarks },
    } = await axios.post(
      `/api/users/remove-bookmark/${post._id}`,
      {},
      {
        headers: { authorization: token },
      }
    );
    return bookmarks;
  } catch (error) {
    console.log(error);
  }
});

export const LikePostHandler = createAsyncThunk("Post/LikePostHandler", async ({ post, token }) => {
  try {
    const {
      data: { posts },
    } = await axios.post(
      `/api/posts/like/${post._id}`,
      {},
      {
        headers: { authorization: token },
      }
    );
    return posts;
  } catch (error) {
    console.log(error);
  }
});
export const DisLikePostHandler = createAsyncThunk("Post/DisLikePostHandler", async ({ post, token }) => {
  try {
    const {
      data: { posts },
    } = await axios.post(
      `/api/posts/dislike/${post._id}`,
      {},
      {
        headers: { authorization: token },
      }
    );
    return posts;
  } catch (error) {
    console.log(error);
  }
});

export const postSlice = createSlice({
  name: "Post",
  initialState: { loading: false, userPostsList: [], usersPostsList: [], bookmarks: [], likedPost: [] },
  reducers: {},
  extraReducers: {
    [loadUserPostList.pending]: (state) => {
      state.loading = true;
    },
    [loadUserPostList.rejected]: (state) => {
      state.loading = false;
      console.log("error");
    },
    [loadUserPostList.fulfilled]: (state, action) => {
      state.loading = false;
      state.userPostsList = action.payload;
    },
    [loadUsersPostsList.pending]: (state) => {
      state.loading = true;
    },
    [loadUsersPostsList.rejected]: (state) => {
      state.loading = false;
      console.log("error");
    },
    [loadUsersPostsList.fulfilled]: (state, action) => {
      state.loading = false;
      state.usersPostsList = action.payload;
    },
    [loadUserBookamrks.pending]: (state) => {
      state.loading = true;
    },
    [loadUserBookamrks.rejected]: (state) => {
      state.loading = false;
      console.log("error");
    },
    [loadUserBookamrks.fulfilled]: (state, action) => {
      state.loading = false;
      state.bookmarks = action.payload;
    },
    [CreatePostHandler.pending]: (state) => {
      state.loading = true;
    },
    [CreatePostHandler.rejected]: (state) => {
      state.loading = false;
      console.log("error");
    },
    [CreatePostHandler.fulfilled]: (state, action) => {
      state.loading = false;
      state.usersPostsList = action.payload;
      state.userPostsList = [...state.userPostsList, action.payload[action.payload.length - 1]];
    },
    [DeletePostHandler.pending]: (state) => {
      state.loading = true;
    },
    [DeletePostHandler.rejected]: (state) => {
      state.loading = false;
      console.log("error");
    },
    [DeletePostHandler.fulfilled]: (state, action) => {
      state.loading = false;
      state.usersPostsList = action.payload.posts;
      state.userPostsList = action.payload.posts.filter((item) => item.username === action.payload.user.username);
    },
    [UpdatePostHandler.pending]: (state) => {
      state.loading = true;
    },
    [UpdatePostHandler.rejected]: (state) => {
      state.loading = false;
      console.log("error");
    },
    [UpdatePostHandler.fulfilled]: (state, action) => {
      state.loading = false;
      state.usersPostsList = action.payload;
    },
    [AddToBookmark.pending]: (state) => {
      state.loading = true;
    },
    [AddToBookmark.rejected]: (state) => {
      state.loading = false;
      console.log("error");
    },
    [AddToBookmark.fulfilled]: (state, action) => {
      state.loading = false;
      state.bookmarks = action.payload;
    },
    [RemoveFromBookmark.pending]: (state) => {
      state.loading = true;
    },
    [RemoveFromBookmark.rejected]: (state) => {
      state.loading = false;
      console.log("error");
    },
    [RemoveFromBookmark.fulfilled]: (state, action) => {
      state.loading = false;
      state.bookmarks = action.payload;
    },
    [LikePostHandler.pending]: (state) => {
      state.loading = true;
    },
    [LikePostHandler.rejected]: (state) => {
      state.loading = false;
      console.log("error");
    },
    [LikePostHandler.fulfilled]: (state, action) => {
      state.loading = false;
      state.likedPost = action.payload;
      state.usersPostsList = action.payload;
    },
    [DisLikePostHandler.pending]: (state) => {
      state.loading = true;
    },
    [DisLikePostHandler.rejected]: (state) => {
      state.loading = false;
      console.log("error");
    },
    [DisLikePostHandler.fulfilled]: (state, action) => {
      state.loading = false;
      state.likedPost = action.payload;
      state.usersPostsList = action.payload;
    },
  },
});

export default postSlice.reducer;
