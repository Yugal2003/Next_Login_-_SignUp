'use client'
import React from 'react'

const Login = () => {

  const handleSubmitForm =(e: any) =>{
    e.preventDefault();
     const email = e.target[0].value;
     const password = e.target[1].value;
     console.log("Email :",email);
     console.log("Password :",password);
  }

  return (
    <div className='center'>
      <h1 className='text-2xl'>Welcome to the Login Page</h1>
      
      <div>
          <form className='form_validation' onSubmit={handleSubmitForm}>
            <div className='flex flex-row gap-4'>
              <label htmlFor="email" className='text-lg'>Email</label>
              <input required autoComplete='off' className='border' type='email' placeholder='Email...' name='email' />
            </div>

            <div className='flex flex-row gap-4'>
              <label htmlFor="password" className='text-lg'>Password</label>
              <input required autoComplete='off' className='border' type='password' placeholder='Password...' name='password' />
            </div>

            <button type="submit" className='border-2 border-gray-400 rounded-md w-24 items-center justify-center flex flex-row'>
              Login
            </button>

          </form>
      </div>
    </div>
  )
}

export default Login;




