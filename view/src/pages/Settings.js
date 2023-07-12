import React, { useState } from 'react'
import { updateInfo, updatePasswordInfo } from '../util/fetch';

export default function Settings({username, setUsername, fullName, setFullName, email, setEmail}) {
  const [disabled, setDisabled] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [showPwdMsg, setshowPwdMsg] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleUpdateInfo = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const response = await updateInfo(data)
    setUsername(response.username)
    setEmail(response.email)
    setFullName(response.firstName + response.lastName)
    setShowMessage(true)
    setTimeout(() => {
      setShowMessage(false)
    }, 2000)
  }
  const updatePassword = async (e) => {
    e.preventDefault();
    const currentPassword = e.currentTarget.currentPassword.value;
    const newPassword = e.currentTarget.newPassword.value;
    const confirmNewPasswordPassword = e.currentTarget.confirmNewPassword.value;
    if (newPassword !== confirmNewPasswordPassword) {
      return alert('New Password or Confirm New Password do not match.')
    }
    const response = await updatePasswordInfo(currentPassword, newPassword, confirmNewPasswordPassword, email);
    if (response.error) {
      setShowError(true);
      return setTimeout(() => {
        setShowError(false);
      }, 2000)
    }
    if (response) {
      setshowPwdMsg(true)
      return setTimeout(() => {
        setshowPwdMsg(false)
      }, 2000)
    }
  }
  return (
    <>
    {email && <form className='flex flex-col justify-center items-center mt-5' onSubmit={e => handleUpdateInfo(e)}>
      <label htmlFor='fullName' className='font-bold'>Full Name</label>
      <input name='fullName' id='fullName' className='border rounded border-slate-900' defaultValue={fullName} onSubmit={(e) => setFullName(e.target.value)}></input>

      <label htmlFor='userName' className='font-bold'>Username</label>
      <input name='userName' id='userName' className='border rounded border-slate-900 text-black' defaultValue={username} onSubmit={(e) => setUsername(e.target.value)}></input>
    
      <label htmlFor='email' className='font-bold'>Email</label>
      <input name='email' id='email' className='border rounded border-slate-900' defaultValue={email} onSubmit={(e) => setEmail(e.target.value)}></input>
      
      <button className='border border-slate-900 rounded mt-5 p-2 bg-blue-700 text-white' type='submit'>Update Information</button>
    </form> }
    {showMessage && <div className='flex flex-col justify-center items-center mt-10 border-y'>
      <h2>Information changed successfully.</h2>
    </div> }
    {email && <div className='flex flex-col justify-center items-center mt-10 border-y'>
      <h2 className='underline mt-10 font-bold'>Change Password</h2>
      <form className='flex flex-col justify-center items-center mt-2 mb-10' onSubmit={e => updatePassword(e)}>
        <label htmlFor='currentPassword'>Current Password</label>
        <input type='password' id='currentPassword' name='currentPassword' className='border rounded border-slate-900'></input>
        <label htmlFor='newPassword'>New Password</label>
        <input type='password' id='newPassword' name='newPassword' className='border rounded border-slate-900'></input>
        <label htmlFor='confirmNewPassword'>Confirm New Password</label>
        <input type='password' id='confirmNewPassword' name='confirmNewPassword' className='border rounded border-slate-900'></input>
        <button className='border border-slate-900 rounded mt-5 p-2 bg-blue-700 text-white' type='submit'>Update Password</button>
      </form>
      {showPwdMsg && <div className='flex flex-col justify-center items-center mt-10 border-y'>
      <h2>Information changed successfully.</h2>
    </div> }
    {showError && <div className='flex flex-col justify-center items-center mt-10 border-y'>
      <h2>Invalid Password Provided.</h2>
    </div> }
    </div> }
    {!email &&
     <div className='flex text-center flex-col justify-center items-center'>
      <h1>Please Login or Register to View this Page.</h1>
     </div>}
    </>
    
  )
}
