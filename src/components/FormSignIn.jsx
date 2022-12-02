import React from 'react'
import { IMaskInput } from 'react-imask'
// import { Icon } from 'react-icons-kit'
// import {eyeSlash} from 'react-icons-kit/fa/eyeSlash'


const FormSignIn = () => {
  return (
    <div>
        <form className='w-screen h-screen flex flex-col justify-center items-center bg-white | sm:w-80'>
            {/* Title */}
            <h1 className='font-bebas text-5xl text-green'>SIGN IN</h1>

            {/* CPF */}
            <IMaskInput className='mt-10 w-64 h-10 pl-3 font-montserrat italic placeholder:text-gray bg-dark-white transition-all | focus:bg-semi-dark-blue focus:text-white focus:placeholder:text-white focus:border-l-4 focus:border-green focus:outline-0' 
            mask="000.000.000-00" name='cpf' placeholder='CPF'/>

            {/* Password */}
            <input className='mt-10 w-64 h-10 pl-3 font-montserrat italic placeholder:text-gray bg-dark-white transition-all | focus:bg-semi-dark-blue focus:text-white focus:placeholder:text-white focus:border-l-4 focus:border-green focus:outline-0'
            type="password" name="password" placeholder='Password'></input>

            {/* Confirm buttom */}
            <button className='mt-10 w-48 h-10 bg-semi-dark-blue font-montserrat font-semibold text-white p-2 transition-all | hover:transition-all hover:border-b-4 hover:border-green' type='submit'>SUBMIT</button>
        </form>
    </div>
  )
}

export default FormSignIn