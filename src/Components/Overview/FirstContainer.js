// import { useEffect } from "react"
// import { CURRENT_MOVIES } from "../../Utils/links"

import { useDispatch, useSelector } from "react-redux"
import { IMG_CDN_URL } from "../../Utils/links"
import { addToggleTrailer } from "../../Utils/movieSlice"
// import VideoBackground from "../Browse/VideoBackground"

const FirstContainer=()=>{
    const dispatch=useDispatch()

    const movie=useSelector((store)=>store.overview)
     const{title,runtime,tagline,release_date,poster_path,overview,genres}=movie.movieData
     const Genres=genres.map((x)=>{return (x.name)})

    const handleClick=()=>{
            dispatch(addToggleTrailer())
    }

    return (
              <div className="pt-[10%]  text-white flex flex-col md:flex-row justify-between  bg-transparent md:pt-0 ">
                <div className="w-[15%] pb-10 mx-20 my-20 md:flex md:flex-col hidden justify-center ">
                <img className="" src={IMG_CDN_URL+poster_path} alt="" />
                <button className="bg-red-700 px-4 py-2 rounded-lg my-3" onClick={handleClick}>Trailer</button>
                </div>
                <div className="flex flex-col justify-center px-10">
                <h1 className="-ml-4 md:-ml-0 font-bold text-3xl md:text-5xl py-5">{title}</h1>
                <h1 className="-ml-4 md:-ml-0 font-bold text-xl md:text-3xl pb-5">{tagline?<span>"{tagline}"</span>:null}</h1>
                <h2 className=" -ml-4 md:-ml-0 text-base mt-5 md:text-xl md:mt-10">Date: <span className="font-bold">{release_date}</span></h2>
                <h2 className=" -ml-4 md:-ml-0 text-base md:text-xl">Genres: <span className="font-bold">{Genres+','}</span></h2>
                <h2 className="-ml-4 md:-ml-0 text-base md:text-xl">Duration: <span className="font-bold">{runtime} min</span></h2>
                <h1 className="font-bold -ml-4 md:-ml-0 text-lg md:text-2xl pt-5 md:pt-10 mt-5 md:mt-10">Overview</h1>
                <p className="text-sm -ml-4 md:-ml-0 md:text-lg py-2 mb-5 md:mb-0 md:py-5">{overview}</p>
                </div>
        </div>

    )
}
export default FirstContainer