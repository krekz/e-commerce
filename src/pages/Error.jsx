import React from 'react'
import {Link} from "react-router-dom"

const Error = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-2'>
        <h1 className='text-4xl font-bold'>Oopps, something went <span className=' text-red-500'>wrong</span> !</h1>
        <p>looks like you navigate to wrong page that never existed !!</p>
        <button className='bg-black text-white p-2 rounded-md'><Link to='/'>Back to home</Link></button>
    </div>
  )
}

export default Error