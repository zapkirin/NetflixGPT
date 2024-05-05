import React, { useEffect, useRef } from 'react'
import { auth } from './firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../Utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { HEADER_LOGO, LANG } from '../Utils/links';
import { toggleView } from '../Utils/gptSearchSlice';
import { addLanguage } from '../Utils/configSlice';

const Header = () => {
const dispatch=useDispatch()
const navigate=useNavigate()

const isSearch=useSelector(store=>store.gpt.toggleValue)


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

const handleToggle=()=>{
  dispatch(toggleView())
}
const langKey=useSelector(store=>store.config.lang)
const handleLanguage=(language)=>{
  dispatch(addLanguage(language.target.value))
 
}
 console.log(langKey)


  return (
    <div className='flex justify-between items-center absolute bg-gradient-to-b from-black w-full'>
        <div className=' z-10'>
          <img className='w-60 m-3 p-5 bg-gradient-to-b from-black' src={HEADER_LOGO} alt="" />
        </div>
          {auth.currentUser&&<div className='flex items-center z-10'>
            <h1 className='text-white font-bold'>{auth?.currentUser?.displayName.toUpperCase()}</h1>
            <img className='w-14 mx-5' src={auth?.currentUser?.photoURL} alt="" />
           {isSearch&&<select  name="" id="" className='mx-4 py-4 px-2 bg-black text-white' onChange={handleLanguage}>
              {LANG.map((language)=>{
                  return  <option key={language.value} value={language.value}>{language.name}</option>
              })}
            </select>}
            <button className='bg-amber-500 text-white px-4 py-2 rounded-lg' onClick={handleToggle}>{!isSearch?"⌕ GPTSearch":"⌂ Home Page"}</button>
            <button onClick={handleClick} className='p-4 rounded-md mx-10 text-white bg-red-700 h-14 font-bold  hover:bg-red-600'>Sign Out</button>
          </div>}
    </div>
    
  )
}

export default Header