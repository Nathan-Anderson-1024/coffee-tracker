import React, { useState } from 'react'
import { updateInfo } from '../util/fetch';

export default function Settings({username, setUsername, fullName, setFullName, email, setEmail}) {
  const [disabled, setDisabled] = useState(true)
  const handleUpdateInfo = async (e) => {
    e.preventDefault();
    console.log('form submitted')
    //console.log(e.target.fullName.value)
    const data = new FormData(e.target);
    console.log(data)
    await updateInfo(data)
  }
  return (
    <>
    <form className='flex flex-col justify-center items-center mt-5' onSubmit={e => handleUpdateInfo(e)}>
      {/* TODO:
        -[] Add inputs to allow users to change user info and update the server
      
      */}
      
      {/* <label htmlFor='firstName'>First Name</label>
      <input id='firstName' className='border rounded border-slate-900' defaultValue={fullName.split(" ")[0]}></input>
      
      <label htmlFor='lastName'>Last Name</label>
      <input id='lastName' className='border rounded border-slate-900' defaultValue={fullName.split(" ")[1]}></input> */}
      <label htmlFor='fullName' className='font-bold'>Full Name</label>
      <input id='fullName' className='border rounded border-slate-900' defaultValue={fullName} onSubmit={(e) => setFullName(e.target.value)}></input>
      <label htmlFor='userName' className='font-bold'>Username</label>
      <input id='userName' className='border rounded border-slate-900 text-black' defaultValue={username} onSubmit={(e) => setUsername(e.target.value)}></input>
      
      
      
      <label htmlFor='email' className='font-bold'>Email</label>
      <input id='email' className='border rounded border-slate-900' defaultValue={email} onSubmit={(e) => setEmail(e.target.value)}></input>
      <button className='border border-slate-900 rounded mt-5 p-2 bg-blue-700 text-white' type='submit'>Update Information</button>
    </form>
    <div className='flex flex-col justify-center items-center mt-10 border-y'>
      <h2 className='underline mt-10 font-bold'>Change Password</h2>
      <form className='flex flex-col justify-center items-center mt-2 mb-10'>
        <label htmlFor='currentPassword'>Current Password</label>
        <input id='currentPassword' className='border rounded border-slate-900'></input>
        <label htmlFor='newPassword'>New Password</label>
        <input id='NewPassword' className='border rounded border-slate-900'></input>
        <label htmlFor='confirmNewPassword'>Confirm New Password</label>
        <input id='confirmNewPassword' className='border rounded border-slate-900'></input>
        <button className='border border-slate-900 rounded mt-5 p-2 bg-blue-700 text-white'>Update Password</button>
      </form>
    </div>
    </>
  )
}
