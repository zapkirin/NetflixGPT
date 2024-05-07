import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice=createSlice({
    name:'gpt',
    initialState:{
        toggleValue:false,
        searchResult:null,
        tmdbMovies:null
    },
    reducers:{
        toggleView:(state,action)=>{
            state.toggleValue=!state.toggleValue
        },
        addMoviesData:(state,action)=>{
            const{movieList,movieTitle}=action.payload
            state.searchResult=movieTitle
            state.tmdbMovies=movieList
        }
    }
})

export const {toggleView,addMoviesData}=gptSearchSlice.actions
export default gptSearchSlice.reducer