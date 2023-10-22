import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isRead:[],
    favorite:[]
}

const outLookSlice= createSlice({
    name:"email",
    initialState,
    reducers:{
        addToIsRead:(state,action)=>{
             state.isRead.push(action.payload)
        },
        addToFavorite:(state,action)=>{
            state.favorite.push(action.payload)
        }
    }
})

export const {addToFavorite,addToIsRead}=outLookSlice.actions
export default outLookSlice.reducer