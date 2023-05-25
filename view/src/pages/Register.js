import React from 'react'
import { NavLink } from 'react-router-dom'
import { createUser } from '../util/fetch';

export default function Register() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    await createUser(data);
  }
  return (
    <div className='text-center'>
      <form className='flex flex-col justify-center items-center' onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor='name'>First Name</label>
        <input name="name" id="name" placeholder='John' className='border border-black w-2/4' required></input>
        <label htmlFor='lastName'>Last Name</label>
        <input name="lastName" id="lastName" placeholder='Smith' className='border border-black w-2/4' required></input>
        <label htmlFor='email'>Email</label>
        <input name="email" id='email' type='email' placeholder='test@example.com' className='border border-black w-2/4' required></input>
        <label htmlFor='password'>Password</label>
        <input name="password" id='password' type='password' className='border border-black w-2/4' required></input>
        <div className='flex flex-row w-2/4 justify-evenly'>
          <button type='submit' className='border border-black mt-2 p-1 rounded bg-blue-900 text-white hover:bg-blue-700 w-1/4'>Submit</button>
          
        </div>
      </form>
      <button className='border border-black mt-6 p-1 rounded bg-blue-600 text-white hover:bg-blue-400 w-1/4'>
        <NavLink to="/login" className="w-full inline-block">Back To Login</NavLink>
      </button>
    </div>
  )
}
