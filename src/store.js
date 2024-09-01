import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/cartSlice";

const strore=configureStore({
    reducer:{
        cart:cartSlice.reducer
    }
})

export default strore;