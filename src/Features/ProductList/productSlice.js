import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: "false",
  products: [],
  err: "",
};

export const fetchProducts = createAsyncThunk("products/fetchProducts", () => {
  return axios
    .get("https://dummyjson.com/products")
    .then((res) => res.data.products);
});

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.err = "";
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.err = state.err.message;
    });
  },
});

export default productSlice.reducer;
