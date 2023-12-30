import { createSlice } from "@reduxjs/toolkit";

export const wishlistslice = createSlice({
    name:'wishlist',
    initialState:[], // [] because more than 1 item will be present
    reducers:{

        addtoWishlist:(state,action)=>{
            state.push(action.payload)
        },

        removeFromWishlist:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        }
    }
})

export const {addtoWishlist, removeFromWishlist} = wishlistslice.actions
export default wishlistslice.reducer