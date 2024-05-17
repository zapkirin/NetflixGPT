import React, { useEffect} from 'react'
import { auth } from './firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../Utils/userSlice';
import { Link, useNavigate } from 'react-router-dom';
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
      // navigate('/browse')
      if(window.location.pathname==='/'){
        navigate('/browse')
      }
    }   
    else {
      // User is signed out
      dispatch(removeUser())
      navigate('/')
    }
  });
  return ()=> unsubscribe()
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])

const handleToggle=()=>{
  dispatch(toggleView())
}

const handleLanguage=(language)=>{
  dispatch(addLanguage(language.target.value))
 
}
//  console.log(langKey)


  return (
    <div className='flex flex-col justify-between items-center absolute bg-gradient-to-b from-black w-full md:bg-opacity-60 md:flex-row'>
        <div className=' z-10'>
          <img className='w-[40%]  mx-auto p-5 bg-gradient-to-b from-black md:w-60 md:static' src={HEADER_LOGO} alt="" />
        </div>
          {auth.currentUser&&<div className='flex items-center z-10 md:pt-6'>
            <h1 className='pl-3 hidden md:inline text-white font-bold'>{auth?.currentUser?.displayName}</h1>
            <img className='w-10 md:inline hidden  mx-5 md:w-14' src={auth?.currentUser?.photoURL} alt="" />
           {isSearch&&<select  name="" id="" className='mx-2 py-1 px-1 bg-black text-white md:mx-4 md:py-4 md:px-2' onChange={handleLanguage}>
              {LANG.map((language)=>{
                  return  <option key={language.value} value={language.value}>{language.name}</option>
              })}
            </select>}
            <button className='bg-amber-500 text-white px-3 py-1 mx-4 text-sm rounded-lg md:px-4 md:py-2 md:text-lg' onClick={handleToggle}><Link to={!isSearch?"/search":"/browse"}>{!isSearch?"⌕ GPTSearch":"⌂ Home Page"}</Link></button>
            <button onClick={handleClick} className='mx-3 py-2 px-4 md:px-4 md:py-1 text-xs md:text-lg rounded-md md:mx-10 text-white bg-red-700 md:h-14 font-bold  hover:bg-red-600'>Sign Out</button>
          </div>}
    </div>
    
  )
}

export default Header