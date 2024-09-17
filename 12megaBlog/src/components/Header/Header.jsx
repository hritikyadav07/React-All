import React from 'react'
import {Container, Logo, LogOutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'



function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate();

  const navItems =[
    {
      name: 'Home',
      slug: '/',
      active: true,
    },
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus,
    },
    {
      name: 'SignUp',
      slug: '/signup',
      active: !authStatus,
    },
    {
      name: 'All-Posts',
      slug: '/all-posts',
      active: authStatus,
    },
    {
      name: 'addPost',
      slug: '/add-post',
      active: authStatus,
    },
  ]


  return (

  )
}

export default Header