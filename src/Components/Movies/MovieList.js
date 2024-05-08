import React from 'react'
import MovieCards from './MovieCards'
import { Link } from 'react-router-dom'

const MovieList = ({title,movies}) => {
    // console.log("MovieList:",movies)
  return (
    <div className='text-white px-2 md:px-6'>
        <h1 className=' text-lg md:text-3xl font-bold py-4'>{title}</h1>
        <div className='flex overflow-x-scroll'>
            <div className='flex'>
            {movies?.map((x)=>{
                return(<> 
                  <Link to={'/overview/' + x.id}>{x.poster_path&&<MovieCards key={x.id} posterPath={x.poster_path} movieID={x.id}/>}</Link>
                  </>
                )   })}
            </div>
            
        </div>
    </div>
  )
}

export default MovieList