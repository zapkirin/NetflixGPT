import { useEffect } from "react"
import { CURRENT_MOVIES } from "../Utils/links"
import { useDispatch} from "react-redux"
import {addSimilarMovies} from "../Utils/movieSlice"

const useSimilarMovies=(movieId)=>{

    const dispatch=useDispatch()
    // const nowPlayingMovies=useSelector(store=>store.movie.movies)
    const getSimilarPLayingMovies=async ()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/similar?language=en-US&page=1",CURRENT_MOVIES)
        const json=await data.json()
        // console.log(json.results) 
        dispatch(addSimilarMovies(json.results))
      }
    
      useEffect(()=>{
        getSimilarPLayingMovies()
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[])

}

export default useSimilarMovies