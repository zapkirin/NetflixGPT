import { useEffect } from "react"
import { CURRENT_MOVIES } from "../Utils/links"
import { useDispatch } from "react-redux"
import { addPopularMovies } from "../Utils/movieSlice"

const usePopularMovies=()=>{

    const dispatch=useDispatch()

    const getPopularMovies=async()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/popular",CURRENT_MOVIES)
        const json=await data.json()
        dispatch(addPopularMovies(json.results))
    }

    useEffect(()=>{
        getPopularMovies()
    },[])

}
export default usePopularMovies