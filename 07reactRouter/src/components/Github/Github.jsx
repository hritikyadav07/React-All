import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([]);
    // // called whenever the component mounts
    // useEffect(() => {
    //   fetch('https://api.github.com/users/hritikyadav07')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //     setData(data)
    //   })
    // }, [])
    
  return (
    <div className='text-center m-4 px-5 py-10 bg-gray-500 text-white text-3xl'>Github followers : {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

//recommended to put in diff file 
 export const  githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hritikyadav07')
    return response.json()
 } 