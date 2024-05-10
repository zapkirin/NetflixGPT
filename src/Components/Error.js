import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const error=useRouteError()
    console.log("error",error)
  return (
    <div>
        <h1>Error in loading page</h1>
    </div>
  )
}

export default Error