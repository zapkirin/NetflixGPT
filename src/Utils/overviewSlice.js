import { createSlice } from "@reduxjs/toolkit";

const overviewSlice=createSlice({
    name:'overview',
    initialState:{
        movieId:null
    },
    reducers:{
        addMovieId:(state,action)=>{
            state.movieId=action.payload
        }
    }
})

export const {addMovieId}=overviewSlice.actions
export default overviewSlice.reducer 