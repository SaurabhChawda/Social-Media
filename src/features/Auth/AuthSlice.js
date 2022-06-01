import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const login = JSON.parse(localStorage.getItem("login"));
const user = JSON.parse(localStorage.getItem("User"));

export const loginUser = createAsyncThunk("Auth/login", async ({ username, password }) => {
  try {
    const { data } = await axios.post(`/api/auth/login`, { username, password });
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const signUpUser = createAsyncThunk("Auth/Signup", async ({ firstName, lastName, username, password }) => {
  try {
    const { data } = await axios.post(`/api/auth/signup`, { firstName, lastName, username, password });
    return data;
  } catch (error) {
    console.log(error);
  }
});
export const UpdateProfileHandler = createAsyncThunk("User/updateUserProfile", async ({ profile, token }) => {
  try {
    const { data } = await axios.post(
      `/api/users/edit`,
      { profile },
      {
        headers: { authorization: token.loggedInUserToken },
      }
    );
    return data.user;
  } catch (error) {
    console.log(error);
  }
});

export const authSlice = createSlice({
  name: "Auth",
  initialState: {
    loading: false,
    isUserLoggedIn: login ? login.isUserLoggedIn : false,
    token: login ? login.token : null,
    user: user ? user.user : null,
  },
  reducers: {
    logOut: (state) => {
      state.isUserLoggedIn = false;
      state.token = null;
    },
  },

  extraReducers: {
    [loginUser.pending]: (state) => {
      state.loading = true;
    },
    [loginUser.rejected]: (state) => {
      state.loading = false;
      console.log("error");
    },
    [loginUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.isUserLoggedIn = true;
      state.token = action.payload.encodedToken;
      state.user = action.payload.foundUser;
      localStorage.setItem("login", JSON.stringify({ isUserLoggedIn: true, token: action.payload.encodedToken }));
      localStorage.setItem("User", JSON.stringify({ user: action.payload.foundUser }));
    },
    [signUpUser.pending]: (state) => {
      state.loading = true;
    },
    [signUpUser.rejected]: (state) => {
      state.loading = false;
      console.log("error");
    },
    [signUpUser.fulfilled]: (state, action) => {
      state.loading = false;
      console.log(action);
      state.isUserLoggedIn = true;
      state.token = action.payload.encodedToken;
      state.user = action.payload.createdUser;
      localStorage.setItem("login", JSON.stringify({ isUserLoggedIn: true, token: action.payload.encodedToken }));
      localStorage.setItem("User", JSON.stringify({ user: action.payload.createdUser }));
    },
    [UpdateProfileHandler.pending]: (state) => {
      state.loading = true;
    },
    [UpdateProfileHandler.rejected]: (state) => {
      state.loading = false;
      console.log("error");
    },
    [UpdateProfileHandler.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
  },
});

export default authSlice.reducer;
export const { logOut } = authSlice.actions;
