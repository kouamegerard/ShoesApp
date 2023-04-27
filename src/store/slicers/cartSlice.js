// @ts-nocheck
import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    deliveryFee: 1000,
    freeDeliveryFrom: 1500,
    isFreeDelivery: 1200
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCartItem: (state, actions) => {
            const newProduct = actions.payload.product;
            const cartItem = state.items.find( (item) => item.product.id === newProduct.id );
            if ( cartItem ) {
                cartItem.quantity += 1;
            } else {
                state.items.push({
                    product: newProduct,
                    quantity: 1,
                });
            }            
        },
        changeQuantity: (state, actions) => {
            const { productId, amount } = actions.payload;
            const cartItem = state.items.find( (item) => item.product.id === productId );

            if ( cartItem ) {
                cartItem.quantity += amount;
            }

            if ( cartItem.quantity <= 0 ) {
                state.items = state.items.filter( (item) => item !== cartItem )
            }
        },
    }
});

const cartSelector = (state) => state.cart;
export const selectNumberOfItems = ( state ) => state.cart.items.length;
export const selectSubtotal = (state) => state.cart.items.reduce( (sum, cartItem) => sum + ( cartItem.product.price * cartItem.quantity ), 0 );
export const selectTotal = (state) => state.cart.items.reduce( (sum) => sum + selectSubtotal, 0 );
export const delivery = createSelector( 
    cartSelector,
    selectSubtotal,
    (cart, subtotal) => (subtotal === 0 || subtotal > cart.isFreeDelivery ? 0 : cart.freeDeliveryFrom)
 )

export default cartSlice;