import { useSelector } from "react-redux"
import useTrailer from "../../Hooks/useTrailer"


const VideoBackground = ({movieID}) => {
   useTrailer(movieID)

   const movieKey=useSelector(store=>store.movie?.trailer?.key)
   if(!movieKey) return

  //  console.log(movieKey)

  return (
    <div className="w-screen aspect-video">
        <iframe className="w-screen  aspect-video" 
        src={`https://www.youtube.com/embed/${movieKey}?si=CxPiJTtCzeUPTKKM&autoplay=1&mute=1`} 
        title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
    </div>
  )
}

export default VideoBackground