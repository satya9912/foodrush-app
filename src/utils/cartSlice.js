import { createSlice } from "@reduxjs/toolkit";
import { notify } from "../components/FoodItems";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalPrice: 0
    },
    reducers: {
        addItem: (state, action) => {
            const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
            if(existingItemIndex !== -1) {
                // Item already exists in cart, increase quantity
                state.items[existingItemIndex].qty++;
                state.totalPrice += parseInt(state.items[existingItemIndex].price);
            } else {
                // Item does not exist in cart, add it with quantity 1
                state.items.push({ ...action.payload, qty: 1});
                state.totalPrice += parseInt(action.payload.price);
            }
        },
        decreaseQuantity: (state, action) => {
            const existingItemIndex = state.items.findIndex(item => item.id === action.payload);
            if(state.items[existingItemIndex].qty > 1){
                state.items[existingItemIndex].qty--;
                state.totalPrice -= parseInt(state.items[existingItemIndex].price);
            } else{
                state.totalPrice -= parseInt(state.items[existingItemIndex].price);
                const tempItems = state.items.filter( (item) => item.id !== action.payload)
                state.items = tempItems;
                notify();
            }
        },
        removeItem: (state, action) => {
                const existingItemIndex = state.items.findIndex(item => item.id === action.payload);
                state.totalPrice -= parseInt(state.items[existingItemIndex].price) * parseInt(state.items[existingItemIndex].qty);
                const tempItems = state.items.filter( (item) => item.id !== action.payload)
                state.items = tempItems;
        },
        clearCart: (state, action) => {
            state.items = [];
            state.totalPrice = 0;
        }
    }
});

export default cartSlice.reducer;
export const {addItem, removeItem, clearCart, decreaseQuantity} = cartSlice.actions;
