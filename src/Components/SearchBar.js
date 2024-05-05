import React from 'react'
import configLang from '../Utils/configLang'
import { useSelector } from 'react-redux'

const SearchBar = () => {

    const langKey=useSelector(store=>store.config.lang)

  return (
    <div className='flex w-2/4 h-16 items-center bg-black text-white'>
        <form action="" className=' flex w-screen'>
        <input className='w-10/12 px-5 py-3 my-1 ml-2 mx-1' type="text" placeholder={configLang[langKey].placeHolder} />
        <button className='w-1/4 mx-1 py-3 px-4 my-1 mr-2 bg-red-800'>{configLang[langKey].search}</button>
        </form>
    </div>
  )
}

export default SearchBar