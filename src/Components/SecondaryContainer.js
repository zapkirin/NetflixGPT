import { useSelector } from "react-redux"
import MovieList from "./MovieList"


const SecondaryContainer=()=>{
    const movies=useSelector(store=>store.movie)
    if(!movies) return
    
    return(
        <div className="w-screen bg-black">
            <div className="-my-52 pl-12 relative z-20">
            <MovieList title="Now Playing" movies={movies?.movies}/>
            <MovieList title="Top Rated" movies={movies?.topRatedMovies}/>
            <MovieList title="Popular" movies={movies?.popularMovies}/>
            <MovieList title="Upcoming" movies={movies?.upcomingMovies}/>
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