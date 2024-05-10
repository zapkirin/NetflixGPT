import { useEffect } from "react"
import { CURRENT_MOVIES } from "../Utils/links"
import { useDispatch, useSelector } from "react-redux"
import { addCast } from "../Utils/overviewSlice"

const useCast=(movieId)=>{

    const dispatch=useDispatch()
    const cast=useSelector(store=>store.overview.cast)

    const getCast=async()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/credits?language=en-US",CURRENT_MOVIES)
        const json=await data.json()
        console.log("cast",json)
        dispatch(addCast(json))
    }

    useEffect(()=>{
        if(!cast){
            getCast()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
}

export default useCast