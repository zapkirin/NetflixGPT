// import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import Header from "../Header"
import FirstContainer from "./FirstContainer"
import SecondContainer from "./SecondContainer"
// import useOverview from "../../Hooks/useOverview"

const Overview=()=>{

    // const movieID=useSelector(store=>store.overview.movieID)
    // const overview=useOverview(movieID)
    // console.log("overview",overview)
    const {movieId}=useParams()
    console.log(movieId)

    return(
        <div className="">
            <Header/>
            <div className="pt-36">
            <FirstContainer/>
            <SecondContainer/>
            </div>
            {/* {
                -FirstContainer
                    -Backgroung Movie poster/Video Backhground
                    -small movie poster
                    -title,duration.description,country,genre

                -SecondaryContainer
                    -Cast . try to reuse movielist? or somewhat likeit
                    -Related videos to the movie
                    -the video link should take the user to youtube
                    -or try to build it in the app only
            } */}
        </div>
    )
}
export default Overview