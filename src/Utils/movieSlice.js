import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"Now Playing Movies",
    initialState:{
        movies:null,
        trailer:null
    },
    reducers:{
        addMovies:(state,action)=>{
             state.movies=action.payload
        },
        addTrailer:(state,action)=>{
            state.trailer=action.payload
        }
    }
})

export default movieSlice.reducer
export const {addMovies,addTrailer}=movieSlice.actions
