import React from 'react'
import FormSignUp from '../components/FormSignUp'
import { useEffect } from 'react'


const SignUp = () => {

  useEffect(() =>{
    var token = localStorage.getItem('token')
    if (token){
      navigate('/profile')
    }
  })

  return (
    <div className='w-screen h-screen bg-gradient-to-b from-dark-blue to-semi-dark-blue flex justify-center items-center'>
        <FormSignUp/>
    </div>
  )
}

export default SignUp