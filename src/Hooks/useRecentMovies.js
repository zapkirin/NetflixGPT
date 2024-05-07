import { useEffect } from "react"
import { CURRENT_MOVIES } from "../Utils/links"
import { useDispatch } from "react-redux"
import { addMovies} from "../Utils/movieSlice"

const useRecentMovies=()=>{

    const dispatch=useDispatch()
    // const nowPlayingMovies=useSelector(store=>store.movie.movies)
    const getNowPLayingMovies=async ()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/now_playing',CURRENT_MOVIES)
        const json=await data.json()
        // console.log(json.results) 
        dispatch(addMovies(json.results))
      }
    
      useEffect(()=>{
        // nowPlayingMovies&&
        getNowPLayingMovies()
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[])

}

export default useRecentMovies