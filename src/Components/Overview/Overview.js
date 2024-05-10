// import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import Header from "../Header"
import FirstContainer from "./FirstContainer"
import { CURRENT_MOVIES } from "../../Utils/links"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addCast, addMovieData } from "../../Utils/overviewSlice"
// import useCast from "../../Hooks/useCast"
// import useOverview from "../../Hooks/useOverview"
import SecondContainer from "./SecondContainer"
import useTrailer from "../../Hooks/useTrailer"
import VideoBackground from "../Browse/VideoBackground"
import { addTrailer } from "../../Utils/movieSlice"
import useSimilarMovies from "../../Hooks/useSimilarMovies"
import MovieList from "../Movies/MovieList"
// import useOverview from "../../Hooks/useOverview"
// import useCast from "../../Hooks/useCast"

const Overview=()=>{
    const {movieId}=useParams()
    // useCast(movieId)
    // useOverview(movieId)
    console.log(movieId)
    useTrailer(movieId)
    useSimilarMovies(movieId)
    const dispatch=useDispatch()
    const data=useSelector((store)=>store.overview.movieData)
    const cast=useSelector(store=>store.overview.cast)
    const similar=useSelector(store=>store.movie.similarMovies)
    
    useEffect(()=>{
        getOverview()
        getCast()
        fetchMovie()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const getOverview=async()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/"+movieId,CURRENT_MOVIES)
        const json=await data.json()
        console.log(json)
        dispatch(addMovieData(json))
    }

    const getCast=async()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/credits?language=en-US",CURRENT_MOVIES)
        const json=await data.json()
        console.log(json)
        dispatch(addCast(json))
    }

    const fetchMovie=async()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",CURRENT_MOVIES)
        const json=await data.json()

        const filteredTrailers=(json.results).filter((x)=>x.type==="Trailer") //sorting trailers from other types of video
        const trailers=filteredTrailers.length===0?json.results[0]:filteredTrailers[0] //if trailer not present
        dispatch(addTrailer(trailers))
    }

    const handleClick=(e)=>{
        console.log(e.target.baseURI.slice(31,))

    }
  
    

    
    return data===null || cast===null || similar===null?<h1>Error</h1>:(
        <div className="">
            <Header/>
            <div className="absolute -z-30">
                <VideoBackground movieID={movieId}/>
            </div>
            <div className="pt-36 h-[110vh] z-10">
            <FirstContainer/>
            <div className="pt-[25rem] bg-black">
            <SecondContainer id={movieId}/>
            </div>
            <div className=" bg-black -mt-[45vh]" key={movieId} onClick={handleClick}>
            <MovieList title="Similar" movies={similar}/>
            </div>
            
            </div>
            
        </div>
    )
}
export default Overview