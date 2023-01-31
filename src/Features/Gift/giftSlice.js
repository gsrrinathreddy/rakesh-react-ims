import { createSlice } from "@reduxjs/toolkit";

const initialState={
    noOfGifts:50,
    noOfOrdered:0,
    noOfCancelled:0,
    giftList:{
        qty:0,
        name:null,
        actualPrice:null,
        discountedPrice:null
    }
}

const giftSlice=createSlice({
    name:'gift',
    initialState,
    reducers:{
        ordered:(state,action)=>{
            if(state.noOfGifts<action.payload){
                console.log("Out Of Stock");
            }else{
                state.noOfGifts -=action.payload.qty;
                state.noOfOrdered +=parseInt(action.payload.qty);

                state.giftList.qty=action.payload.qty;
                state.giftList.name=action.payload.title;
                state.giftList.actualPrice=action.payload.actualPrice;
                state.giftList.discountedPrice=action.payload.discountedPrice;
            }
        },
        restocked:(state,action)=>{
            state.noOfGifts +=action.payload;
        },
        cancelled:(state,action)=>{
            if(state.noOfOrdered>=0 && state.noOfOrdered>=action.payload){
                state.noOfCancelled +=action.payload;
                state.noOfGifts +=action.payload;
                state.noOfOrdered -=action.payload;
            }
        }
    }
})

export default giftSlice.reducer;
export const {ordered,restocked,cancelled}=giftSlice.actions;