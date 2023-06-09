import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { logoutUser } from '../util/fetch';
export default function NavBar({username, login, fullName, setLogin}) {
    const [clicked, setClicked] = useState(false);
    const handleClick = (e) => {
        setClicked(!clicked);
    }
    const handleLogout = async () => {
        setClicked(!clicked)
        const response = await logoutUser();
        const json = await response.json();
        console.log(json)
        setLogin(false);
        console.log(login)

        
    }
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <NavLink to="/"   className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "flex items-center"}>
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CoffeeTracker</span>
                </NavLink>
                <div className="flex items-center md:order-2 relative">
                    {login ? <button onClick={handleClick} type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                        <span className="sr-only">Open user menu</span>
                        <img className="w-8 h-8 rounded-full" src={require('../imgs/icons8-customer-64.png')} alt="user profile"></img>
                    </button> : <button className='text-white'><NavLink to={'/login'} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "hidden" : ""}>Login</NavLink></button>}
                    {login ? <div className={`absolute top-2 left-10 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 ${clicked ? 'visible' : 'hidden'}`} id="user-dropdown">
                        <div className="px-4 py-3">
                            <span className="block text-sm text-gray-900 dark:text-white">{fullName} </span>
                            <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{username}</span>
                        </div>
                        <ul className="py-2" aria-labelledby="user-menu-button">
                            <li>
                                <NavLink to="/settings" onClick={handleClick} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"}>Settings</NavLink>
                            </li>
                            <li>
                                <button to="/login" onClick={handleLogout} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"}>Sign Out</button>
                            </li>
                        </ul>
                    </div> : <></>}
                    <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"} style={({isActive, isPending}) => {return {color: isActive ? 'wheat' : ''}}}>
                            Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/submit" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"} style={({isActive, isPending}) => {return {color: isActive ? 'wheat' : ''}}}>
                            Submit Resource
                            </NavLink>
                        </li>
                        {/* <li>
                            <NavLink to="/analyze" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"} style={({isActive, isPending}) => {return {color: isActive ? 'wheat' : ''}}}>
                                Analyze
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"} style={({isActive, isPending}) => {return {color: isActive ? 'wheat' : ''}}}>
                                Contact
                            </NavLink>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
