import React from 'react'
import { useEffect,useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data= useLoaderData()

  return (
    <div className='text-center m-4 bg-gray-500 text-white text-3xl'>Github Followers: {data.followers}
    <img src={data.avatar_url} alt='git pic' width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader=async()=>{
    const response= await fetch('https://api.github.com/users/ashrafakib02')
    return response.json()
}