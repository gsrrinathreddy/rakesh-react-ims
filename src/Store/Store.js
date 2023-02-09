import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import cakeReducer from "../Features/Cake/cakeSlice";
import logger from "redux-logger";
import icecreamReducer from "../Features/Icecream/icecreamSlice";
import chocolateReducer from "../Features/Chocolate/chocolateSlice";
import giftReducer from "../Features/Gift/giftSlice";
import flowerReducer from "../Features/Flower/flowerSlice";
import cartReducer from "../Features/Cartlist/cartListSlice";
import favReducer from "../Features/Favlist/favListSlice";
import userReducer from "../Features/Users/userSlice";
import productReducer from "../Features/ProductList/productSlice";
import postReducer from "../Features/Postsapi/postSlice";
import productitemReducer from "../Features/ProductList/productitems";
const Store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    chocolate: chocolateReducer,
    gift: giftReducer,
    flower: flowerReducer,
    cart: cartReducer,
    fav: favReducer,
    user: userReducer,
    products: productReducer,
    post: postReducer,
    productitems: productitemReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default Store;
