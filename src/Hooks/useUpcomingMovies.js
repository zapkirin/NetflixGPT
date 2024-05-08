import { useDispatch, useSelector} from "react-redux"
import { CURRENT_MOVIES } from "../Utils/links"
import { addUpcomingMovies } from "../Utils/movieSlice"
import { useEffect } from "react"

const useUpcomingMovies=()=>{

    const dispatch=useDispatch()

    const upcomingMovies=useSelector(store=>store.movie.upcomingMovies)

    const getUpcomingMovies=async()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/upcoming",CURRENT_MOVIES)
        const json=await data.json()
        dispatch(addUpcomingMovies(json.results))
    }

    useEffect(()=>{
         if(!upcomingMovies) getUpcomingMovies()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
}
export default useUpcomingMovies