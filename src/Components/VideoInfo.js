import React from 'react'

const VideoInfo = ({title,description}) => {
  return (
    
    <div className='w-screen aspect-video text-white py-[20%] px-24 absolute bg-gradient-to-r from-black'>
        <h1 className="font-bold text-6xl w-1/3">{title}</h1>
            <p className="w-1/4 text-lg my-4">{description}</p>
            <div className="flex my-2">
                <button className="bg-white text-xl font-bold text-black px-12 p-4 rounded-lg hover:bg-opacity-80"> ▷ Play</button>
                <button className="bg-gray-500 text-xl font-bold text-white px-12 p-4 rounded-lg mx-2 bg-opacity-50">ⓘ More Info</button>
            </div>
    </div>
  )
}

export default VideoInfo