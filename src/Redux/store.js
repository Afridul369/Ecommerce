import { configureStore } from "@reduxjs/toolkit";
import  cartSlice  from "./Slices/cartSlice";
import  breadCrumb  from "./Slices/BreadCrumb";

export const store = configureStore({
    reducer:{
        cartSlice,
        breadCrumb,
    }
})