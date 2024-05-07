import { SIGNIN_IMG } from "../Utils/links"
import SearchBar from "./SearchBar"
import SearchResult from "./SearchResult"

const GptSearch=()=>{
    return(
        <div className="">
            <div className="absolute -z-20 ">
            <img className="h-screen object-cover md:h-screen w-screen"  src={SIGNIN_IMG} alt="" />
            </div>
            <div className="pt-60 flex flex-col md:pt-48">
            <SearchBar/>
            <SearchResult/>
            </div>
        </div>
    )


}
export default GptSearch