import React from 'react'

const VideoInfo = ({title,description}) => {
  return (
    
    <div className='flex flex-col w-screen aspect-video text-white py-[13%] px-6 md:px-24 absolute bg-gradient-to-r from-black'>
        <h1 className="font-bold text-lg inline-block md:text-6xl w-1/3">{title}</h1>
            <p className="w-1/4 text-lg my-4 hidden md:inline-block">{description}</p>
            <div className="flex my-2">
                <button className="bg-white text-lg md:text-xl font-bold text-black py-1 px-2 md:px-12 md:py-4 rounded-lg hover:bg-opacity-80"> ▷ Play</button>
                <button className="bg-gray-500 hidden md:inline-block text-xl font-bold text-white px-12 p-4 rounded-lg mx-2 bg-opacity-50">ⓘ More Info</button>
            </div>
    </div>
  )
}

export default VideoInfo