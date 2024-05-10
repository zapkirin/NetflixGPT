import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"Now Playing Movies",
    initialState:{
        movies:null,
        trailer:null,
        popularMovies:null,
        topRatedMovies:null,
        upcomingMovies:null,
        toggleTrailer:false,
        similarMovies:null
    },
    reducers:{
        addMovies:(state,action)=>{
             state.movies=action.payload
        },
        addPopularMovies:(state,action)=>{
             state.popularMovies=action.payload
        },
        addTopRatedMovies:(state,action)=>{
             state.topRatedMovies=action.payload
        },
        addUpcomingMovies:(state,action)=>{
             state.upcomingMovies=action.payload
        },
        addTrailer:(state,action)=>{
            state.trailer=action.payload
        },
        addToggleTrailer:(state,action)=>{
            state.toggleTrailer=!state.toggleTrailer
        },
        addSimilarMovies:(state,action)=>{
            state.similarMovies=action.payload
        }
    }
})

export default movieSlice.reducer
export const {addMovies,addTrailer,addPopularMovies,addTopRatedMovies,addUpcomingMovies,addToggleTrailer,addSimilarMovies}=movieSlice.actions
