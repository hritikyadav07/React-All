import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/config'
import {logout} from '../../store/authSlice'


function LogOutBtn() {
    const dispatch = useDispatch();
    const logoutHandler = () =>{
        authService.logout().then(() =>{
            dispatch(logout())
            console.log('User logged out');
        })
    }
  return (
    <button className='inline-block px-6 duration-200 py-2 hover:bg-blue-100 rounded-full'
    >Log Out</button>
  )
}

export default LogOutBtn