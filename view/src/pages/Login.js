import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Login() {
  const handleButton = (e) => {
    e.preventDefault();
  }
  return (
    <div className='text-center'>
      <form className='flex flex-col justify-center items-center'>
        <label htmlFor='email'>Email</label>
        <input id='email' type='email' placeholder='test@example.com' className='border border-black w-2/4'></input>
        <label htmlFor='password'>Password</label>
        <input id='password' type='password' placeholder='123456789' className='border border-black w-2/4'></input>
        <div className='flex flex-row w-2/4 justify-evenly'>
          <button className='border border-black mt-2 p-1 rounded bg-blue-900 text-white hover:bg-blue-700 w-1/4'>Log In</button>
          <button onClick={handleButton} className='border border-black mt-2 p-1 rounded bg-blue-600 text-white hover:bg-blue-400 w-1/4'>
            <NavLink to="/register" className="w-full inline-block">Register</NavLink>
          </button>
        </div>
        
      </form>
    </div>
  )
}
