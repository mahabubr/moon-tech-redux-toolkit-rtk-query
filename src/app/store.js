import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import cartSlice from "../feature/cart/cartSlice";
import filterSlice from "../feature/filter/filterSlice";


const store = configureStore({
    reducer: {
        cart: cartSlice,
        filter: filterSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store