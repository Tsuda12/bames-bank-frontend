import axios from 'axios';
import React, { useState } from 'react'
import { IMaskInput } from 'react-imask'
import { useNavigate } from 'react-router-dom';
import Notiflix from 'notiflix'
// import { Icon } from 'react-icons-kit'
// import {eyeSlash} from 'react-icons-kit/fa/eyeSlash'


const FormSignUp = () => {

  const navigate = useNavigate()

  const [register, setRegister ] = useState({
    username: '',
    cpf: '',
    email: '',
    wage: '',
    password: ''
  });

  const registerUser = (event) => {
    event.preventDefault()
    axios.post('http://bames-api.azurewebsites.net/api/register', register, {headers: {'X-Requested-With': 'XMLHttpRequest'},})
    .then((res) => {
      console.log(res.data)
      navigate('/signin')
    })
    .catch((err) => {
      Notiflix.Notify.failure('Usuário já existente.', {timeout: 1300})
    })
  }

  const onHandleChange = (evt) => {
    evt.preventDefault()
    setRegister({... register, [evt.target.name] : evt.target.value})
    console.log(register)
  }

  return (
    <div>
        <form className='w-screen h-screen flex flex-col justify-center items-center bg-white | sm:w-80' onSubmit={registerUser}>
            {/* Title */}
            <h1 className='font-bebas font-normal text-5xl text-green'>SIGN UP</h1>

            {/* Name */}
            <input className='mt-10 w-64 h-10 pl-3 font-montserrat italic placeholder:text-gray bg-dark-white transition-all | focus:bg-semi-dark-blue focus:text-white focus:placeholder:text-white focus:border-l-4 focus:border-green focus:outline-0' 
            type="text" name="username" placeholder='Name' onChange={onHandleChange}></input>

            {/* CPF */}
            <IMaskInput className='mt-10 w-64 h-10 pl-3 font-montserrat italic placeholder:text-gray bg-dark-white transition-all | focus:bg-semi-dark-blue focus:text-white focus:placeholder:text-white focus:border-l-4 focus:border-green focus:outline-0' 
            mask="000.000.000-00" name='cpf' placeholder='CPF' onChange={onHandleChange}/>

            {/* E-mail */}
            <input className='mt-10 w-64 h-10 pl-3 font-montserrat italic placeholder:text-gray bg-dark-white transition-all | focus:bg-semi-dark-blue focus:text-white focus:placeholder:text-white focus:border-l-4 focus:border-green focus:outline-0'
            type="email" name="email" placeholder='E-mail' onChange={onHandleChange}></input>

            {/* Wage */}
            <input className='mt-10 w-64 h-10 pl-3 font-montserrat italic placeholder:text-gray bg-dark-white transition-all | focus:bg-semi-dark-blue focus:text-white focus:placeholder:text-white focus:border-l-4 focus:border-green focus:outline-0'
            type="text" name="wage" placeholder='Wage' onChange={onHandleChange}></input>

            {/* Password */}
            <input className='mt-10 w-64 h-10 pl-3 font-montserrat italic placeholder:text-gray bg-dark-white transition-all | focus:bg-semi-dark-blue focus:text-white focus:placeholder:text-white focus:border-l-4 focus:border-green focus:outline-0'
            type="password" name="password" placeholder='Password' onChange={onHandleChange}></input>

            {/* Confirm buttom */}
            <button className='mt-10 w-48 h-10 bg-semi-dark-blue font-montserrat font-semibold text-white p-2 transition-all | hover:transition-all hover:border-b-4 hover:border-green' type='submit'>SUBMIT</button>
        </form>
    </div>
  )
}

export default FormSignUp