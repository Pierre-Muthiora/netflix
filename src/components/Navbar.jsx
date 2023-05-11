import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {UserAuth} from "../context/AuthContext"


const Navbar = () => {
  const {user, logOut} = UserAuth()
  const navigate = useNavigate()
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex items-center justify-between w-full p-4 z-[100] absolute'>        
        <Link to="/">
          <div className='w-48 cursor-pointer'>
              <img src="pics\download2.png" alt="NETFLYX" />
          </div>
        </Link>    
        
        {user?.email ? (
          <div>
          <Link to="/account">
          <button className='text-white pr-4'>Account</button>
          </Link>
          
          <button onClick={handleLogout} className='bg-red-600 px-6 py-4 rounded cursor-pointer text-white'>LogOut</button>
          
      </div>
        ) : (
          <div>
            <Link to="/login">
            <button className='text-white pr-4'>Sign In</button>
            </Link>
            <Link to="/signup">
            <button className='bg-red-600 px-6 py-4 rounded cursor-pointer text-white'>Sign Up</button>
            </Link>
        </div>
        ) }
    </div>
  )
}

export default Navbar