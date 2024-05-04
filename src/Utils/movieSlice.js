import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"Now Playing Movies",
    initialState:{
        movies:null,
        trailer:null,
        popularMovies:null,
        topRatedMovies:null,
        upcomingMovies:null
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
        }
    }
})

export default movieSlice.reducer
export const {addMovies,addTrailer,addPopularMovies,addTopRatedMovies,addUpcomingMovies}=movieSlice.actions
