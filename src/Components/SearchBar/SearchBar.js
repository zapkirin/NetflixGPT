import React, { useRef } from 'react'
import configLang from '../../Utils/configLang'
import { useDispatch, useSelector } from 'react-redux'
// import openai from '../Utils/openai'
import { CURRENT_MOVIES } from '../../Utils/links'
import { addMoviesData } from '../../Utils/gptSearchSlice'

const SearchBar = () => {

    const langKey=useSelector(store=>store.config.lang)

    const searchValue=useRef(null)

    const dispatch=useDispatch()
    

    const fetchTmdbMovies=async()=>{
        const data=await fetch("https://api.themoviedb.org/3/search/movie?query="+searchValue.current.value+"&include_adult=false&language=en-US&page=1",CURRENT_MOVIES)
        const json=await data.json()
        // console.log(json.results)
        // console.log(CURRENT_MOVIES)
        dispatch(addMoviesData({movieList:json.results,movieTitle:searchValue.current.value}))
    }
    

    const handleGptSearch=()=>{
        fetchTmdbMovies()
    }

  return (
    <div className='flex w-full  md:w-2/4 h-16 items-center bg-black text-white self-center'>
        <form action="" className=' flex w-screen' onSubmit={(e)=>e.preventDefault()}>
        <input ref={searchValue} className=' w-full md:w-10/12 text-black px-5 py-3 my-1 ml-2 mx-1' type="text" placeholder={configLang[langKey].placeHolder} />
        <button className='w-1/4 mx-1 py-3 px-4 my-1 mr-2 bg-red-800' onClick={handleGptSearch}>{configLang[langKey].search}</button>
        </form>
    </div>
  )
}

export default SearchBar