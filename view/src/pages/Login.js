import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { loginUser } from '../util/fetch';
export default function Login({setEmail, loading, setLoading, login, setLogin, username, setUsername, error, setError, fullName, setFullName}) {
  // const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const nav = useNavigate();


  const handleUserName = (e) => {
    const value = e.target.value;
    setUsername(value);
  }
  const handlePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  }
  const handleButton = async (e) => {
    e.preventDefault();
    setLoading(true)
    const status = await loginUser(username, password);
    if (status === undefined) {
      setLoading(false)
      setLoginError(true);
      setTimeout(() => {
        setLoginError(false)
      }, 1500)
      return nav('/login')
    }
    if (status.status === 200) {
      const json = await status.json();
      setLoading(false);
      setLogin(true)
      setFullName(`${json.firstName} ${json.lastName}`)
      setEmail(`${json.email}`)
      nav('/')
    }
  }

  if (loading) {
    return (
      <div className='text-center'>
        <h1>LOADING...</h1>
      </div>
    )
  }
  if (loginError) {
    return (
      <div className='text-center'>
        <h1>Incorrect username or password.</h1>
      </div>
    )
  }
  return (
    <div className='text-center'>
      <form className='flex flex-col justify-center items-center' onSubmit={(e) => handleButton(e)}>
        <label htmlFor='email'>Email</label>
        <input onChange={handleUserName} name="email" id='email' type='email' placeholder='test@example.com' className='border border-black w-2/4 rounded'></input>
        <label htmlFor='password'>Password</label>
        <input onChange={handlePassword} name="password" id='password' type='password' placeholder='123456789' className='border border-black w-2/4 rounded'></input>
        <div className='flex flex-row w-2/4 justify-evenly'>
          <button type='submit' className='border border-black mt-2 p-1 rounded bg-blue-900 text-white hover:bg-blue-700 w-1/4'>Log In</button>
          <button onClick={(e) => e.preventDefault()} className='border border-black mt-2 p-1 rounded bg-blue-600 text-white hover:bg-blue-400 w-1/4'>
            <NavLink to="/register" className="w-full inline-block">Register</NavLink>
          </button>
        </div>
      </form>
    </div>
  )
}
