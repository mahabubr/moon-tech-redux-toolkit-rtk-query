import { configureStore, } from "@reduxjs/toolkit";
import { productAPI } from "../feature/api/apiSlice";
import cartSlice from "../feature/cart/cartSlice";
import filterSlice from "../feature/filter/filterSlice";


const store = configureStore({
    reducer: {
        [productAPI.reducerPath]: productAPI.reducer,
        cart: cartSlice,
        filter: filterSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productAPI.middleware)
})

export default store