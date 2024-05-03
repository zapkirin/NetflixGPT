import { useSelector } from "react-redux"
import VideoInfo from "./VideoInfo"
import VideoBackground from "./VideoBackground"

const PrimaryContainer=()=>{
    const movies=useSelector(store=>store.movie?.movies)
    if(!movies) return //Early return
    
    const {id,overview,original_title}=movies[0]

    return(
        <div>
            <VideoInfo title={original_title} description={overview}/>
            <VideoBackground movieID={id}/>
        </div>
    )
}
export default PrimaryContainer