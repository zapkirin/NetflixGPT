import React from 'react'
import { IMG_CDN_URL } from '../Utils/links'

const MovieCards = ({posterPath}) => {
  return (
    <div className='pr-4 w-48'>
        <img className='' src={IMG_CDN_URL+posterPath} alt="Movie Card" />
    </div>
  )
}

export default MovieCards