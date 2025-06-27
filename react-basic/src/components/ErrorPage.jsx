import React from 'react'
import {Link} from 'react-router-dom'

export const ErrorPage = () => {
  return (
    <div className='flex justify-center'>
      <div className='text-center'>
         <h2 className='text-3xl font-semibold text-center'>404 page not found</h2>
         <button className='border rounded-lg p-2'>
            <Link to={'/'}> go back</Link>
         </button>
      </div>
    </div>
  )
}
export default ErrorPage
