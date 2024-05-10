import { createSlice } from "@reduxjs/toolkit";



const overviewSlice=createSlice({
    name:'overview',
    initialState:{
        movieData:null,
        cast:null
    },
    reducers:{
        addMovieData:(state,action)=>{
            state.movieData=action.payload;
        },
        addCast:(state,action)=>{
            state.cast=action.payload;
        },
    }
})

export const {addMovieData,addCast}=overviewSlice.actions
export default overviewSlice.reducer 