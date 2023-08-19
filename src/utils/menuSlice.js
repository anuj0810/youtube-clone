import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name:"menuClick",
    initialState:{
        isMenuClicked : true
    },
    reducers:{
        menuClickAction : (state) => {
            state.isMenuClicked = ! state.isMenuClicked;
    
        }
    }
})


export const {menuClickAction} = menuSlice.actions;
export default menuSlice.reducer;