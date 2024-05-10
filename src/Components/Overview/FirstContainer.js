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
              <div className="pt-[30%]  text-white flex justify-between  bg-transparent md:pt-0 ">
                <div className="w-[15%] pb-10 mx-20 my-20 flex flex-col justify-center ">
                <img className="" src={IMG_CDN_URL+poster_path} alt="" />
                <button className="bg-red-700 px-4 py-2 rounded-lg my-3" onClick={handleClick}>Trailer</button>
                </div>
                <div className="flex flex-col justify-center px-10">
                <h1 className="font-bold text-5xl py-5">{title}</h1>
                <h1 className="font-bold text-3xl pb-5">{tagline?<span>"{tagline}"</span>:null}</h1>
                <h2 className="text-xl mt-10">Date: <span className="font-bold">{release_date}</span></h2>
                <h2 className="text-xl">Genres: <span className="font-bold">{Genres+','}</span></h2>
                <h2 className=" text-xl ">Duration: <span className="font-bold">{runtime} min</span></h2>
                <h1 className="font-bold text-2xl pt-10 mt-10">Overview</h1>
                <p className="text-lg py-5">{overview}</p>
                </div>
        </div>

    )
}
export default FirstContainer