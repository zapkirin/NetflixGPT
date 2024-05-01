import { useState } from "react"
import { SIGNIN_IMG } from "../Utils/links"
import Header from "./Header"
import { useRef } from "react"
import { checkValidation } from "../Utils/validate"
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth"
import { auth } from "./firebase"

const Login=()=>{
    const[signIn,setSignIn]=useState(true)
    const[isValid,setIsValid]=useState(null)

    const email=useRef(null)
    const password=useRef(null)

    const handleClick=()=>{
        console.log(email.current.value,password.current.value)
        const result=checkValidation(email.current.value,password.current.value)
        setIsValid(result)
        if(result!==null) return

        if(!signIn){
            createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
                    .then((userCredential) => {
                        // Signed up 
                        const user = userCredential.user;
                        console.log(user)
                        // ...
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        setIsValid(errorCode+"-"+errorMessage)
                        // ..
                    });
        }

        if(signIn){
            signInWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        // Signed in 
                        const user = userCredential.user;
                        console.log(user)
                        // ...
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        setIsValid(errorCode+"-"+errorMessage)
                    });

        }
    }

    return(
        <div className="">
            <Header/>
            <div className="absolute md:block">
                <img src={SIGNIN_IMG} alt="" />
            </div>
                <form onSubmit={(e)=>e.preventDefault()} action="" className="flex flex-col absolute bg-opacity-80 bg-black p-12 w-3/12 my-36 mx-auto right-0 left-0 rounded-lg text-white">
                <h1 className="py-2 font-bold text-3xl">{signIn?"Sign In":"Sign Up"}</h1>
                {!signIn&&<input type="text" placeholder="Full name" className="my-3 p-4 w-full bg-gray-900 rounded-lg" />}
                <input ref={email} type="text" placeholder="Email or mobile number" className="my-3 p-4 w-full bg-gray-900 rounded-lg" />
                <input ref={password} type="password" placeholder="Password" className="my-3 p-4 w-full  bg-gray-900 rounded-lg" />
                <p className="text-red-800 text-lg font-semibold my-4">{isValid}</p>
                <button className="py-4 bg-red-700 h-14 font-bold rounded-lg  hover:bg-red-600" onClick={handleClick}>{signIn?"Sign In":"Sign Up"}</button>
                <p className="text-center py-4">OR</p>
                <button className="bg-opacity-70 rounded-lg bg-slate-600 hover:bg-slate-500 font-bold h-14">Use a sign-in code</button>
                <button className="text-center py-4 hover:underline">Forgot password?</button>
                <p className="cursor-pointer hover:underline" onClick={()=>{
                    setSignIn(!signIn)
                    
                }}>{signIn?"New to NetflixGPT? Sign-up":"Already have an account? Sign-in"}</p>
            </form>
        </div>
            

    )
}

export default Login