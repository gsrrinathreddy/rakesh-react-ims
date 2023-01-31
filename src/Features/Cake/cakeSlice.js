import {createSlice, original} from '@reduxjs/toolkit';
import ItemCard from '../../Components/ItemCard';

const initialState={
    noOfCakes:50,
    noOfOrdered:0,
    noOfCancelled:0,
    cakeList:{
        qty:0,
        name:null,
        actualPrice:null,
        discountedPrice:null    
    }
}

const cakeSlice=createSlice({
    name:"cake",
    initialState,
    reducers:{
        ordered:(state,action)=>{
            console.log(action)
             if(state.noOfCakes<action.payload){
                console.log("Out of stock");
            }else{
                console.log("action order placed",action.payload);

                state.noOfOrdered +=parseInt(action.payload.qty);
                state.noOfCakes -=action.payload.qty;
                

                state.cakeList.qty=action.payload.qty;
                state.cakeList.name=action.payload.title;
                state.cakeList.actualPrice=action.payload.actualPrice;
                state.cakeList.discountedPrice=action.payload.discountedPrice;
            }
        },
        restocked:(state,action)=>{
            state.noOfCakes +=action.payload;
        },
        cancelled:(state,action)=>{
            if(state.noOfOrdered>0 && state.noOfOrdered>=action.payload){
                {
                    state.noOfOrdered -=action.payload;
                    state.noOfCakes+=action.payload;
                }
            }
        }
    }
})

export default cakeSlice.reducer;
export const{restocked,ordered,cancelled} =cakeSlice.actions;