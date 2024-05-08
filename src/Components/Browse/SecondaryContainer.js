import { useSelector } from "react-redux"
import MovieList from "../Movies/MovieList"


const SecondaryContainer=()=>{
    const movies=useSelector(store=>store.movie)
    if(!movies) return
    
    return(
        <div className="w-screen bg-black">
            <div className="mt-0 md:-my-52 pl-2 md:pl-12 relative z-20">
            <MovieList title="Now Playing" movies={movies?.movies}/>
            <MovieList title="Top Rated" movies={movies?.topRatedMovies}/>
            <MovieList title="Popular" movies={movies?.popularMovies}/>
            <MovieList title="Upcoming" movies={movies?.upcomingMovies}/>

            </div>
            

            {/* 
            MovieList
                Moviecards
            MovieList
                Moviecards
            MovieList
                Moviecards
            MovieList
                Moviecards
            */}
        </div>
    )
}
export default SecondaryContainer