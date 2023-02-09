import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  noOfProductItems: 0,
  noOfProductWished: 0,
};

const productitems = createSlice({
  name: "productitems",
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.noOfProductItems += parseInt(action.payload.qty);
    },
    Wished: (state, action) => {
      state.noOfProductWished += parseInt(action.payload.qty);
    },
  },
});

export default productitems.reducer;
export const { ordered, Wished } = productitems.actions;
