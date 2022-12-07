import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'


const NavBar = (props) => {
  return (
    <div className='w-full h-10 flex flex-row justify-between'>
      {/* Logo */}
      <div className='w-32 ml-2 flex items-center'>
        <img className='w-28 h-6' src={logo} alt='logo'></img>
      </div>

      {/* SignUp and SignIn */}
      <div className='flex items-center'>
        <button className='h-full px-3 font-montserrat font-semibold transition-all | hover:text-white hover:bg-green'>
        <Link to='/signup'> {props.signup} </Link> </button>

        <button className='h-full px-3 font-montserrat font-semibold transition-all | hover:text-white hover:bg-green'>
        <Link to='/signin'> {props.signin} </Link> </button>
      </div>

    </div>
  )
}

export default NavBar