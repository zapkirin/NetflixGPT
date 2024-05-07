import { useDispatch } from "react-redux"
import { CURRENT_MOVIES } from "../Utils/links"
import { addTopRatedMovies } from "../Utils/movieSlice"
import { useEffect } from "react"

const useTopRatedMovies=()=>{
    const dispatch=useDispatch()

    // const topatedMovies=useSelector(store=>store.movie.topRatedMovies)

    const getTopRatedMovies=async()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/top_rated",CURRENT_MOVIES)
        const json=await data.json()
        dispatch(addTopRatedMovies(json.results))
    }

    useEffect(()=>{
    //    topatedMovies&&
       getTopRatedMovies()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
}
export default useTopRatedMovies