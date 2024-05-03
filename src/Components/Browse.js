import React from 'react'
// import { HEADER_LOGO} from '../Utils/links'
// import { useDispatch } from 'react-redux'
// import { removeUser } from '../Utils/userSlice'
import Header from './Header'
import useRecentMovies from '../Hooks/useRecentMovies'
import PrimaryContainer from './PrimaryContainer';
import SecondaryContainer from './SecondaryContainer';



const Browse = () => {
  useRecentMovies();  //Custom hook for fetching movie api and updating the store
 

  return (
        <div className=''>
          <Header/>
          <PrimaryContainer />
          <SecondaryContainer/>
        </div>
  )
}

export default Browse