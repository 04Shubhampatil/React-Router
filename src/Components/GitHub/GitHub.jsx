import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function GitHub() {
    // const [data, setData] = useState([])
    // useEffect(() =>{
    //     fetch('https://api.github.com/users/04Shubhampatil')
    //    .then(res => res.json())
    //    .then(data => {
    //     console.log(data); // Log the fetched data
    //     setData(data); // Set the fetched data
    // })
       
       
    // } ,[])

  return (
    <div className='text-center m-4 bg-gray-500
     text-white p-4 text-3xl '>GitHub following:{data.following}
     <img src={data.avatar_url} alt="Git picture" width={300} />

     </div>
  )
}

export const gitbubInfoLoader = async () => {
  const Response = await fetch('https://api.github.com/users/04Shubhampatil')
  return Response.json()
}