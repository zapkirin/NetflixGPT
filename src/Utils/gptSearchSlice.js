import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice=createSlice({
    name:'gpt',
    initialState:{
        toggleValue:false
    },
    reducers:{
        toggleView:(state,action)=>{
            state.toggleValue=!state.toggleValue
        }
    }
})

export const {toggleView}=gptSearchSlice.actions
export default gptSearchSlice.reducer