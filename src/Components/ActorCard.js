import React from 'react'
import { IMG_CDN_URL } from '../Utils/links'

const ActorCard = ({name,photoURL,role}) => {
  return (
            <>
            {photoURL&&<div className='w-48 py-4 mx-4 hover:w-52'>
                <img  src={IMG_CDN_URL+photoURL} alt="" />
                <h1><span className='font-bold text-lg'>{name}</span> as {role}</h1>
            </div>}
            </>
  )
}

export default ActorCard