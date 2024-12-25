import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const isFound = state.cartProducts.findIndex(
        (item) => item.id == action.payload.id
      );
      if(isFound != -1){
        state.cartProducts[isFound].quantity += 1
      }else{
        state.cartProducts.push(action.payload);
      }
    },
    removeCart:(state,action)=>{
        state.cartProducts = state.cartProducts.filter((item)=>item.id != action.payload.id)
    },   
  },
});

export const { addCart,removeCart } = cartSlice.actions;
export default cartSlice.reducer;
