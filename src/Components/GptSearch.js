import { SIGNIN_IMG } from "../Utils/links"
import SearchBar from "./SearchBar"
import SearchResult from "./SearchResult"

const GptSearch=()=>{
    return(
        <div className="">
            <div className="absolute -z-20">
            <img  src={SIGNIN_IMG} alt="" />
            </div>
            <div className="py-48 flex flex-col items-center">
            <SearchBar/>
            <SearchResult/>
            </div>
        </div>
    )


}
export default GptSearch