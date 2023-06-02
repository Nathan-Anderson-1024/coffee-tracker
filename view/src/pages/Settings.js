import React from 'react'

export default function Settings({username, fullName, email}) {
  const handleUpdateInfo = () => {
    
  }
  return (
    <>
    <form className='flex flex-col justify-center items-center mt-5'>
      {/* TODO:
        -[] Add inputs to allow users to change user info and update the server
      
      */}
      
      <label htmlFor='firstName'>First Name</label>
      <input id='firstName' className='border rounded border-slate-900' defaultValue={fullName.split(" ")[0]}></input>
      
      <label htmlFor='lastName'>Last Name</label>
      <input id='lastName' className='border rounded border-slate-900' defaultValue={fullName.split(" ")[1]}></input>
      
      <label htmlFor='userName'>Username</label>
      <input id='userName' className='border rounded border-slate-900 text-black' defaultValue={username}></input>
      
      
      
      <label htmlFor='email'>Email</label>
      <input id='email' className='border rounded border-slate-900' defaultValue={email}></input>
      <button className='border border-slate-900 rounded mt-5 p-2 bg-blue-700 text-white'>Update Information</button>
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
        <button className='border border-slate-900 rounded mt-5 p-2 bg-blue-700 text-white'>Change Password</button>
      </form>
    </div>
    </>
  )
}
