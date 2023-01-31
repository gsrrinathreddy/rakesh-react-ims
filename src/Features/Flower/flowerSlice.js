import { createSlice } from "@reduxjs/toolkit";

const initialState={
    noOfFlowers:100,
    noOfOrdered:0,
    noOfCancelled:0,
    flowerList:{
        qty:0,
        name:null,
        actualPrice:null,
        discountedPrice:null
    }
}

const flowerSlice=createSlice({
    name:'flower',
    initialState,
    reducers:{
        ordered:(state,action)=>{
            if(state.noOfFlowers<action.payload){
                console.log("Out Of Stock");
            }else{
                state.noOfOrdered +=parseInt(action.payload.qty);
                state.noOfFlowers -=action.payload.qty;

                state.flowerList.qty=action.payload.qty;
                state.flowerList.name=action.payload.title;
                state.flowerList.actualPrice=action.payload.actualPrice;
                state.flowerList.discountedPrice=action.payload.discountedPrice;
            }
        },
        restocked:(state,action)=>{
            state.noOfFlowers +=action.payload;
        },
        cancelled:(state,action)=>{
            if(state.noOfOrdered>=0 && state.noOfOrdered>=action.payload){
                state.noOfCancelled +=action.payload;
                state.noOfFlowers +=action.payload;
                state.noOfOrdered -=action.payload;
            }
        }
    }
})

export default flowerSlice.reducer;
export const{restocked,ordered,cancelled}=flowerSlice.actions;