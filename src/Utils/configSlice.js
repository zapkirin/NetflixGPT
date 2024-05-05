import { createSlice } from "@reduxjs/toolkit";

const configSlice=createSlice({
    name:"config",
    initialState:{
        lang:"En"
    },
    reducers:{
        addLanguage:(state,action)=>{
            state.lang=action.payload
        }
    }

})

export default configSlice.reducer
export const {addLanguage}=configSlice.actions