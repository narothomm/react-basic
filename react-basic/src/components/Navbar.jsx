import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { userContext } from './ContextProvider'


const Navbar = () => {
    const { logout, user } = useContext(userContext)
    const handleLogout = () => logout()
    return (
        <div className='bg-blue-600 flex justify-between px-5 py-3'>
            <h2 className='text-2xl font-semibold text-white text-center'><NavLink to='/'>Learn React
            </NavLink></h2>
            <ul className='flex gap-5'>

                <li className='font-semibold text-xl text-white'>
                    <NavLink to={'/'} className={({ isActive }) => isActive ?
                     "text-red-500" : ""} >Home</NavLink></li>

                <li className='font-semibold text-xl text-white'>
                    <NavLink to={"/product-details"} className={({ isActive }) => isActive ? "text-red-500" : ""}>products</NavLink></li>

                <li className='font-semibold text-xl text-white'>
                    <NavLink to={"/posts"} className={({ isActive }) => isActive ? 
                    "text-red-500" : ""}>posts</NavLink></li>

            </ul>

            {user ? <button onClick={handleLogout} 
            className='font-semibold text-white p-2 rounded-lg border border-white'>
            Logout</button> : 
            <button className='font-semibold text-white p-2 rounded-lg border border-white'>
            <Link to={'/login'}>Login </Link> </button>}

     {/* {user ? (
      <button
      onClick={handleLogout}
      className="font-semibold text-white p-2 rounded-lg border border-white">
       Logout </button>) : 

       (<div className="flex gap-3">
      <Link to="/login"
      className="font-semibold text-white p-2 rounded-lg border border-white">
      Login </Link>

     <Link to="/signup"
      className='bg-green-600 text-white px-4 py-1 border rounded hover:bg-green-700'>
      Sign Up</Link>
  </div>
)} */}


    </div>
    )
}

export default Navbar