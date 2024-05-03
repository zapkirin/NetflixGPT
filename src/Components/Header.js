import React, { useEffect } from 'react'
import { auth } from './firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../Utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { HEADER_LOGO } from '../Utils/links';

const Header = () => {
const dispatch=useDispatch()
const navigate=useNavigate()
  
  const handleClick=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
}

useEffect(()=>{
  const unsubscribe=onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in
      const {uid,email,displayName,photoURL} = user;
      dispatch(addUser({
        uid:uid,
        email:email,
        name:displayName,
        photoURL:photoURL
      }))
      navigate('/browse')
    } else {
      // User is signed out
      dispatch(removeUser())
      navigate('/')
    }
  
  });
  return ()=> unsubscribe()
},[])

  return (
    <div className='flex justify-between items-center absolute bg-gradient-to-b from-black w-full'>
        <div className=' z-10'>
          <img className='w-60 m-3 p-5 bg-gradient-to-b from-black' src={HEADER_LOGO} alt="" />
        </div>
          {auth.currentUser&&<div className='flex items-center z-10'>
            <h1 className='text-white font-bold'>Welcome {auth?.currentUser?.displayName}</h1>
            <img className='w-14 mx-5' src={auth?.currentUser?.photoURL} alt="" />
            <button onClick={handleClick} className='p-4 rounded-md mx-10 text-white bg-red-700 h-14 font-bold  hover:bg-red-600'>Sign Out</button>
          </div>}
    </div>
    
  )
}

export default Header