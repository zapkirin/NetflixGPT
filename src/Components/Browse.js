import React from 'react'
import { HEADER_LOGO} from '../Utils/links'
// import { useDispatch } from 'react-redux'
// import { removeUser } from '../Utils/userSlice'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from './firebase'

const Browse = () => {
  const navigate=useNavigate()
  // const dispatch=useDispatch()

  const handleClick=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/')
    }).catch((error) => {
      // An error happened.
    });
}
console.log(auth)
  return (
        <div className='flex justify-between items-center bg-black'>
          <div className='w-60 '>
          <img src={HEADER_LOGO} alt="" />
          </div>
          <div className='flex items-center'>
          <h1 className='text-white font-bold'>Welcome {auth?.currentUser?.displayName}</h1>
          <img className='w-14 mx-5' src={auth?.currentUser?.photoURL} alt="" />
          <button onClick={handleClick} className='p-4 rounded-md mx-10 text-white bg-red-700 h-14 font-bold  hover:bg-red-600'>Sign Out</button>
          </div>
        </div>
  )
}

export default Browse