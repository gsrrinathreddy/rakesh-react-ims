import { createSlice } from "@reduxjs/toolkit";

const initialState={
    noOfIcecreams:30,
    noOfOrdered:0,
    noOfCancelled:0,
    icecreamList:{
        name:null,
        qty:0,
        actualPrice:null,
        discountedPrice:null
    }
}

const icecreamSlice=createSlice({
    name:'icecream',
    initialState,
    reducers:{
        ordered:(state,action)=>{
            if(state.noOfIcecreams<action.payload){
                console.log("Out Of Stock");
            }else{
                state.noOfIcecreams -=action.payload.qty;
                state.noOfOrdered +=parseInt(action.payload.qty);

                state.icecreamList.name=action.payload.title;
                state.icecreamList.qty=action.payload.qty;
                state.icecreamList.actualPrice=action.payload.actualPrice;
                state.icecreamList.discountedPrice=action.payload.discountedPrice;
            }
            
        },
        restocked:(state,action)=>{
            state.noOfIcecreams +=action.payload;
        },
        cancelled:(state,action)=>{
            if(state.noOfOrdered>=action.payload){
                state.noOfOrdered -=action.payload;
                state.noOfCancelled +=action.payload;
                state.noOfIcecreams +=action.payload;
            }
        }
    },
    extraReducers:{
        ['cake/ordered']:(state,action)=>{
            if(state.noOfIcecreams>=4 && state.noOfIcecreams>=0){
                if(action.payload>=4){
                    state.noOfIcecreams--;
                    state.noOfOrdered++;
                }
            }
        }
    }
})

export default icecreamSlice.reducer;
export const{ordered,restocked,cancelled} =icecreamSlice.actions;