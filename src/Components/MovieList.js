import React from 'react'
import MovieCards from './MovieCards'

const MovieList = ({title,movies}) => {
    // console.log("MovieList:",movies)
  return (
    <div className='text-white px-2 md:px-6'>
        <h1 className=' text-lg md:text-3xl font-bold py-4'>{title}</h1>
        <div className='flex overflow-x-scroll'>
            <div className='flex'>
            {movies?.map((x)=>{
                return(<> 
                  {x.poster_path&&<MovieCards key={x.poster_path} posterPath={x.poster_path}/>}
                  </>
                )   })}
            </div>
            
        </div>
    </div>
  )
}

export default MovieList