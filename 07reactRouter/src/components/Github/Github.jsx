import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([]);
    // called whenever the component mounts
    useEffect(() => {
      fetch('https://api.github.com/users/hritikyadav07')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data)
      })
    }, [])
    
  return (
    <div className='text-center m-4 py-10 bg-gray-500 text-white text-3xl'>Github followers : {data.followers}
    <img src={data.avatar_url} alt="" />
    </div>
  )
}

export default Github