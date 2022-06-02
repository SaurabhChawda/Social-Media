import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsersList = createAsyncThunk("User/getUsersList", async () => {
  try {
    const {
      data: { users },
    } = await axios.get("/api/users");
    return users;
  } catch (error) {
    console.log(error);
  }
});

export const FollowUserHandler = createAsyncThunk("User/Follower", async ({ userId, token }) => {
  try {
    const { data } = await axios.post(
      `/api/users/follow/${userId._id}`,
      {},
      {
        headers: { authorization: token },
      }
    );
    return data.user.following;
  } catch (error) {
    console.log(error);
  }
});

export const UnfollowUserHandler = createAsyncThunk("User/UnFollower", async ({ userId, token }) => {
  try {
    const { data } = await axios.post(
      `/api/users/unfollow/${userId._id}`,
      {},
      {
        headers: { authorization: token },
      }
    );
    return data.user.following;
  } catch (error) {
    console.log(error);
  }
});

export const userSlice = createSlice({
  name: "User",
  initialState: { loading: false, usersList: [], userFollowers: [], userFollowing: [] },
  reducers: {},
  extraReducers: {
    [getUsersList.pending]: (state) => {
      state.loading = true;
    },
    [getUsersList.rejected]: (state) => {
      state.loading = false;
      console.log("error");
    },
    [getUsersList.fulfilled]: (state, action) => {
      state.loading = false;
      state.usersList = action.payload;
    },
    [FollowUserHandler.pending]: (state) => {
      state.loading = true;
    },
    [FollowUserHandler.rejected]: (state) => {
      state.loading = false;
      console.log("error");
    },
    [FollowUserHandler.fulfilled]: (state, action) => {
      state.loading = false;
      state.userFollowing = action.payload;
    },
    [UnfollowUserHandler.pending]: (state) => {
      state.loading = true;
    },
    [UnfollowUserHandler.rejected]: (state) => {
      state.loading = false;
      console.log("error");
    },
    [UnfollowUserHandler.fulfilled]: (state, action) => {
      state.loading = false;
      state.userFollowing = action.payload;
    },
  },
});
export default userSlice.reducer;
