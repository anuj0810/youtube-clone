import {createSlice} from "@reduxjs/toolkit";
// import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"searchCache",
    initialState:{
        
    },
    reducers:{
          searchCacheAction : (state, action) => {
            state = Object.assign(state, action.payload)
         }
    }
})

export const {searchCacheAction}  = searchSlice.actions;
export default searchSlice.reducer;