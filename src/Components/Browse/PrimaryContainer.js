import { useSelector } from "react-redux"
import VideoInfo from "../Browse/VideoInfo"
import VideoBackground from "../Browse/VideoBackground"

const PrimaryContainer=()=>{
    const movies=useSelector(store=>store.movie?.movies)
    if(!movies) return //Early return
    
    const {id,overview,original_title}=movies[0]
    // console.log(movies)
    return(
        <div className="pt-[30%] bg-black md:pt-0 ">
            <VideoInfo title={original_title} description={overview}/>
            <VideoBackground movieID={id}/>
        </div>
    )
}
export default PrimaryContainer