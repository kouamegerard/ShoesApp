import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slicers/productsSlice";
import cartSlice from "./slicers/cartSlice";

const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
        cart: cartSlice.reducer,
    },
});

export default store;