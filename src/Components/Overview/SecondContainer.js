import { useSelector } from "react-redux"
import ActorCard from "../ActorCard"
// import MovieList from "../Movies/MovieList"



const SecondContainer=()=>{
    const cast=useSelector(store=>store.overview.cast)
    // const similarMovies=useSelector(store=>store.movie.similarMovies)
    console.log(cast.cast)
    const castList=cast.cast

    return(
        <div className="text-white bg-transparent h-[100vh] -mt-[425px] ">
            {/* <h1 className="font-bold text-4xl px-5 py-5">Cast</h1> */}
            <div className="flex overflow-x-scroll bg-transparent z-10">
                <div className="flex">
                    {castList.map((actor)=>{
                        return <ActorCard key={actor.id} role={actor.character} name={actor.name} id={actor.id} photoURL={actor.profile_path}/>
                    })}
                </div>
                {/* <div>
                    <MovieList title="Similar" movies={similarMovies}/>
                </div> */}
            </div>
        </div>
    )
}
export default SecondContainer