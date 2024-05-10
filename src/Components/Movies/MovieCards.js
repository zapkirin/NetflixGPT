import React from 'react'
import { IMG_CDN_URL } from '../../Utils/links'
// import { Link } from 'react-router-dom'


const MovieCards = ({posterPath,movieID}) => {



  // const handleMovieCard=()=>{
  //   dispatch(addMovieId(movieID))
  //   console.log(movieID)
  // }

  return (
    <>
    <div  className='pr-4 w-40 md:w-48 hover:w-52'>
        <img  className='' src={IMG_CDN_URL+posterPath} alt="Movie Card" />
    </div>
    </>
  )
}

export default MovieCards