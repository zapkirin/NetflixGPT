import { useEffect } from "react"
import { CURRENT_MOVIES } from "../Utils/links"
import { useDispatch, useSelector } from "react-redux"
import { addPopularMovies } from "../Utils/movieSlice"

const usePopularMovies=()=>{

    const dispatch=useDispatch()

    const popularMovies=useSelector(store=>store.movie.popularMovies)
    

    const getPopularMovies=async()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/popular",CURRENT_MOVIES)
        const json=await data.json()
        dispatch(addPopularMovies(json.results))
        // console.log("upcoming:",CURRENT_MOVIES)
    }

    useEffect(()=>{
        // console.log('popularMovies',popularMovies)
       if(!popularMovies) getPopularMovies()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

}
export default usePopularMovies