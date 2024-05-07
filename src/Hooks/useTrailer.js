import { useEffect } from "react"
import { CURRENT_MOVIES } from "../Utils/links"
import { useDispatch } from "react-redux"
import { addTrailer } from "../Utils/movieSlice"

const useTrailer=(movieID)=>{
    const dispatch=useDispatch()

    // const trailer=useSelector(store=>store.movie.trailer)

        const fetchMovie=async()=>{
            const data=await fetch("https://api.themoviedb.org/3/movie/"+movieID+"/videos?language=en-US",CURRENT_MOVIES)
            const json=await data.json()

            const filteredTrailers=(json.results).filter((x)=>x.type==="Trailer") //sorting trailers from other types of video
            const trailers=filteredTrailers.length===0?json.results[0]:filteredTrailers[0] //if trailer not present
            dispatch(addTrailer(trailers))
        }
        useEffect(()=>{
            // trailer&&
            fetchMovie()
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[])


}
export default useTrailer