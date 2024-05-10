import React from 'react'
// import { HEADER_LOGO} from '../Utils/links'
// import { useDispatch } from 'react-redux'
// import { removeUser } from '../Utils/userSlice'
import Header from '../Header'
import useRecentMovies from '../../Hooks/useRecentMovies'
import PrimaryContainer from '../Browse/PrimaryContainer';
import SecondaryContainer from '../Browse/SecondaryContainer';
import usePopularMovies from '../../Hooks/usePopularMovies';
import useTopRatedMovies from '../../Hooks/useTopRatedMovies';
import useUpcomingMovies from '../../Hooks/useUpcomingMovies';
import { useSelector } from 'react-redux';
import GptSearch from '../SearchBar/GptSearch';




const Browse = () => {
  useRecentMovies();  //Custom hook for fetching movie api and updating the store
 usePopularMovies();
 useTopRatedMovies();
 useUpcomingMovies();

 const toggle=useSelector(store=>store.gpt.toggleValue)


  return (
        <div className=''>
          <Header/>
          {toggle?<GptSearch/>:<>
          <PrimaryContainer />
          <SecondaryContainer/>
          </>}
          
        </div>
  )
}

export default Browse