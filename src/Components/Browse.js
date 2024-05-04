import React from 'react'
// import { HEADER_LOGO} from '../Utils/links'
// import { useDispatch } from 'react-redux'
// import { removeUser } from '../Utils/userSlice'
import Header from './Header'
import useRecentMovies from '../Hooks/useRecentMovies'
import PrimaryContainer from './PrimaryContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../Hooks/usePopularMovies';
import useTopRatedMovies from '../Hooks/useTopRatedMovies';
import useUpcomingMovies from '../Hooks/useUpcomingMovies';



const Browse = () => {
  useRecentMovies();  //Custom hook for fetching movie api and updating the store
 usePopularMovies();
 useTopRatedMovies();
 useUpcomingMovies();

  return (
        <div className=''>
          <Header/>
          <PrimaryContainer />
          <SecondaryContainer/>
        </div>
  )
}

export default Browse