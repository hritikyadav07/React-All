import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} =useParams()
  return (
    <>
    <div className='bg-gray-600 m-5  text-white text-3xl flex justify-center py-10'> User :  {userid}
    </div>
    {/* <button className=' m-4 px-3 py-2 text-2xl bg-red-700 text-white rounded-md cursor-pointer'>Subscribe</button> */}
    </>
  )
}

export default User