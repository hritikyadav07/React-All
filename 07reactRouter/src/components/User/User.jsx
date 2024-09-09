import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} =useParams()
  return (
    <div className='bg-gray-600 m-5  text-white text-3xl flex justify-center py-10'> User :  {userid}</div>
  )
}

export default User