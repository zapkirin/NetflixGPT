import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login/Login'
import Browse from './Browse/Browse'
import Overview from './Overview/Overview'
import Error from './Error'
import GptSearch from './SearchBar/GptSearch'

const Body = () => {
    const appComponents=createBrowserRouter([
        {
          path:'/',
          element:<Login/>,
          errorElement:<Error/>
        },
        {
          path:'/browse',
          element:<Browse/>,
          errorElement:<Error/>
        },
        {
          path:'/search',
          element:<GptSearch/>,
          errorElement:<Error/>
        },
        {
          path:'overview/:movieId',
          element:<Overview/>,
          errorElement:<Error/>
      }
        ])
  return (
    <div>
        <RouterProvider router={appComponents}/>
    </div>
  )
}

export default Body