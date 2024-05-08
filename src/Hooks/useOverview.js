import { useEffect } from "react"
import { CURRENT_MOVIES } from "../Utils/links"

const useOverview=(movieID)=>{

    const getOverview=async()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/"+movieID+"?language=en-US",CURRENT_MOVIES)
        const json=await data.json()
        return json.results
    }

    useEffect(()=>{
        getOverview()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

}
export default useOverview