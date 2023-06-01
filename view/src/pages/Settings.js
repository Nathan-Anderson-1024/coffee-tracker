import React from 'react'

export default function Settings() {
  return (
    <form className='flex flex-col justify-center items-center mt-5'>
      {/* TODO:
        -[] Add inputs to allow users to change user info and update the server
      
      */}
      
      <label htmlFor='firstName'>First Name</label>
      <input id='firstName' className='border rounded border-slate-900'></input>
      
      <label htmlFor='lastName'>Last Name</label>
      <input id='lastName' className='border rounded border-slate-900'></input>
      
      <label htmlFor='userName'>Username</label>
      <input id='userName' className='border rounded border-slate-900'></input>
      
      <label htmlFor='password'>Password</label>
      <input id='password' className='border rounded border-slate-900'></input>
      
      <label htmlFor='email'>Email</label>
      <input id='email' className='border rounded border-slate-900'></input>
      
    </form>
  )
}
