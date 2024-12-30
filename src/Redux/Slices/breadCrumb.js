import { createSlice } from '@reduxjs/toolkit'

export const breadCrumb = createSlice({
  name: 'BreadCrumb',
  initialState: {
    BeforepreviousValue:"",
    previousValue:"",
    currentValue: "",
  },
  reducers: {
    Bread: (state,action) => {
    state.BeforepreviousValue = state.previousValue
    state.previousValue = state.currentValue
    state.currentValue = action.payload
    
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { Bread } = breadCrumb.actions

export default breadCrumb.reducer