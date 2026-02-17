import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    cartItems: [] // initially an empty array
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload
            const existing = state.cartItems.find(
                (i) => i.id == item.id)

            if (existing) {
                existing.quantity += 1
            } else {
                state.cartItems.push({ ...item, quantity: 1 })  // ...item means copy all item details like name, price 
            }
        },
        increaseQuantity: (state, action) => {
            const item = state.cartItems.find(
                (i) => i.id === action.payload
            )
            item.quantity += 1
        },
        decreaseQuantity: (state, action) => {
            const item = state.cartItems.find(
                (i) => i.id === action.payload
            )
            if (item.quantity > 1) {
                item.quantity -= 1
            }
        },
        removeItem: (state, action) => {
            state.cartItems = state.cartItems.filter(
                (i) => i.id !== action.payload
            )
        }
    }
})

export const { addToCart, increaseQuantity, decreaseQuantity, removeItem } = cartSlice.actions
export default cartSlice.reducer