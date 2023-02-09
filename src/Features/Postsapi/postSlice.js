import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  loading: "false",
  posts: [],
  error: "",
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.data);
});

const postSlice = createSlice({
  name: "post",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
      state.error = "";
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
      state.posts = [];
      state.error = state.error.message;
    });
  },
});

export default postSlice.reducer;
