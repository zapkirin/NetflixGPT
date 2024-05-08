import React from 'react'
import { useSelector } from 'react-redux'
// import { IMG_CDN_URL } from '../Utils/links'
import MovieList from '../Movies/MovieList'

const SearchResult = () => {

  const{SearchResult,tmdbMovies}=useSelector(store=>store.gpt)
  // if(!tmdbMovies) return null
  console.log("result",SearchResult)

  return (<div className=''>
        {tmdbMovies&&<div className='p-2 m-2 md:p-4 md:m-4 bg-black text-white md:bg-opacity-70 '>
          <MovieList title={SearchResult} movies={tmdbMovies}/>
        </div>}
        </div>
  )
}

export default SearchResult