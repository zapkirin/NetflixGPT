import { useEffect } from "react"
import { CURRENT_MOVIES } from "../Utils/links"
import { useDispatch, useSelector } from "react-redux"
import { addMovieData } from "../Utils/overviewSlice"

const useOverview=(movieID)=>{

    const dispatch=useDispatch()
    const overview=useSelector((store)=>store?.overview?.movieData)

    useEffect(()=>{
        if(!overview){
            getOverview()
        }
   
    },[])

    const getOverview=async()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/"+movieID+"?language=en-US",CURRENT_MOVIES)
        const json=await data.json()
        console.log(json)
        dispatch(addMovieData(json))
    }
        console.log(overview)
}
export default useOverview