import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import cakeReducer from "../Features/Cake/cakeSlice";
import logger from 'redux-logger'
import icecreamReducer from "../Features/Icecream/icecreamSlice";
import chocolateReducer from "../Features/Chocolate/chocolateSlice";
import giftReducer from "../Features/Gift/giftSlice";
import flowerReducer from "../Features/Flower/flowerSlice";
import cartReducer from "../Features/Cartlist/cartListSlice";
const Store=configureStore({
    reducer:{
        cake:cakeReducer,
        icecream:icecreamReducer,
        chocolate:chocolateReducer,
        gift:giftReducer,
        flower:flowerReducer,
        cart:cartReducer
    },
    middleware:getDefaultMiddleware=>getDefaultMiddleware().concat(logger)
})

export default Store;