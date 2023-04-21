import { createSlice } from "@reduxjs/toolkit";
import products from "../../data/products";

const initialState = {
    products: products,
    selectedProduct: null,
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setSelectedProduct: (state, actions) => {
            const productId = actions.payload;
            // @ts-ignore
            state.selectedProduct = state.products.find( (p) => p.id === productId )
        }
    },
})

export default productsSlice;