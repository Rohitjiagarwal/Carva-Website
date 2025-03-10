import React from 'react'
import logo from '/src/assets/logo2.png'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
      <div className='bg-cover bg-cn bg-[url(https://images.unsplash.com/photo-1625259772600-d69e399e87e6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-10  flex justify-between flex-col w-full bg-red-400'>
        <img className='w-20 ml-8 ' src={logo} alt='logo'  />
        <div className='bg-white pb-6 py-4 px-4 '>
          <h2 className='text-3xl font-bold'>Get Started with Carva </h2>
          <Link to='/login'className=' flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Start