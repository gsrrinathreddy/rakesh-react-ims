import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  noOfChocolates: 50,
  noOfOrdered: 0,
  noOfCancelled: 0,
  chocolateList: {
    name: null,
    actualPrice: null,
    discountedPrice: null,
    qty: 0,
  },
  noOfWishChocolates: 0,
};

const chocolateSlice = createSlice({
  name: "chocolate",
  initialState,
  reducers: {
    ordered: (state, action) => {
      if (state.noOfChocolates < action.payload) {
        console.log("Out Of Stock");
      } else {
        state.noOfOrdered += parseInt(action.payload.qty);
        state.noOfChocolates -= action.payload.qty;

        state.chocolateList.qty = action.payload.qty;
        state.chocolateList.name = action.payload.title;
        state.chocolateList.actualPrice = action.payload.actualPrice;
        state.chocolateList.discountedPrice = action.payload.discountedPrice;
      }
    },
    restocked: (state, action) => {
      state.noOfChocolates += action.payload;
    },
    cancelled: (state, action) => {
      if (state.noOfOrdered >= 0 && state.noOfOrdered >= action.payload) {
        state.noOfCancelled += action.payload;
        state.noOfOrdered -= action.payload;
        state.noOfChocolates += action.payload;
      }
    },
    Wished: (state, action) => {
      state.noOfWishChocolates += parseInt(action.payload.qty);
    },
  },
});

export default chocolateSlice.reducer;
export const { ordered, restocked, cancelled, Wished } = chocolateSlice.actions;
