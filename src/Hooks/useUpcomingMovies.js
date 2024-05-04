import { useDispatch } from "react-redux"
import { CURRENT_MOVIES } from "../Utils/links"
import { addUpcomingMovies } from "../Utils/movieSlice"
import { useEffect } from "react"

const useUpcomingMovies=()=>{

    const dispatch=useDispatch()

    const getUpcomingMovies=async()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/upcoming",CURRENT_MOVIES)
        const json=await data.json()
        dispatch(addUpcomingMovies(json.results))
    }

    useEffect(()=>{
        getUpcomingMovies()
    },[])
}
export default useUpcomingMovies