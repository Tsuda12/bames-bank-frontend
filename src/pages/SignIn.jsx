import React from 'react'
import FormSignIn from '../components/FormSignIn'
import { useEffect } from 'react'


const SignIn = () => {

  useEffect(() =>{
    var token = localStorage.getItem('token')
    if (token){
      navigate('/profile')
    }
  })

  return (
    <div className='w-screen h-screen bg-gradient-to-b from-dark-blue to-semi-dark-blue flex justify-center items-center'>
        <FormSignIn/>
    </div>
  )
}

export default SignIn