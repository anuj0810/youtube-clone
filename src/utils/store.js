import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menuSlice";
import searchSlice from "./searchSlice";

const Store = configureStore({
    reducer :{
        menuClick : menuSlice,
        searchCache : searchSlice
    }
})

export default Store;