import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favList: [],
  totalItems: 0,
};

const favSlice = createSlice({
  name: "fav",
  initialState,
  extraReducers: {
    ["cake/Wished"]: (state, action) => {
      console.log("fav slice", action.payload);
      state.favList.push(action.payload);
      state.totalItems += parseInt(action.payload.qty);
    },
    ["chocolate/Wished"]: (state, action) => {
      console.log("fav slice", action.payload);
      state.favList.push(action.payload);
      state.totalItems += parseInt(action.payload.qty);
    },
    ["flower/Wished"]: (state, action) => {
      console.log("fav slice", action.payload);
      state.favList.push(action.payload);
      state.totalItems += parseInt(action.payload.qty);
    },
    ["gift/Wished"]: (state, action) => {
      console.log("fav List", action.payload);
      state.favList.push(action.payload);
      state.totalItems += parseInt(action.payload.qty);
    },
    ["icecream/Wished"]: (state, action) => {
      console.log("fav List", action.payload);
      state.favList.push(action.payload);
      state.totalItems += parseInt(action.payload.qty);
    },
    ["productitems/Wished"]: (state, action) => {
      console.log("cart", action.payload);
      state.favList.push(action.payload);
      state.totalItems += parseInt(action.payload.qty);
    },
  },
});

export default favSlice.reducer;
