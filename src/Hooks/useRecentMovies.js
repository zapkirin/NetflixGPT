import { useEffect } from "react"
import { CURRENT_MOVIES } from "../Utils/links"
import { useDispatch } from "react-redux"
import { addMovies } from "../Utils/movieSlice"

const useRecentMovies=()=>{

    const dispatch=useDispatch()

    const nowPLayingMovies=async ()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',CURRENT_MOVIES)
        const json=await data.json()
        // console.log(json.results) 
        dispatch(addMovies(json.results))
      }
    
      useEffect(()=>{
        nowPLayingMovies()
      },[])

}

export default useRecentMovies