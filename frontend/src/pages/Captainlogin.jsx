import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import logo from '/src/assets/logo2.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CaptainDataContext } from '../context/CaptainContext'


const Captainlogin = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const {captain,setCaptain} = React.useContext(CaptainDataContext) 

    const navigate = useNavigate()
   
    const submitHandler = async (e) => {
      e.preventDefault()
    const captain = {
        email:email,
        password
      }

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`,captain)

      if(response.status === 200){
        const data = response.data
        setCaptain(data.captain)
        localStorage.setItem('token',data.token)
        navigate('/captain-home')
      }

      setEmail('')
      setPassword('')
    }

  return (
    <div className='p-7 h-screen pt-9 flex flex-col justify-between '>
    <div>
    <form onSubmit={(e)=>{
      submitHandler(e)
    }}>
       <img className='w-20 mb-3 pb-5' src={logo} alt='logo'  />
      <h3 className='text-lg font-medium mb-2'>What's your email</h3>
      <input
      required
      value={email}
      onChange={(e)=>{
        setEmail(e.target.value)
      }}
      className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base border-black'
      type="email" placeholder='email@example.com' />

      <h4 className='text-lg font-medium  mb-2'>Enter Password</h4>
      <input 
      required
      value={password}
      onChange={(e)=>{
        setPassword(e.target.value)
      }} 
      className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2  w-full text-lg placeholder:text-base border border-gray-900 ' type="password" placeholder='password' />

      <button className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2  w-full text-lg placeholder:text-base '>
       Login
      </button>

      <p  className='text-center '> Join Our Network ? <Link to='/captain-signup' className='text-blue-600'>Sign Up as a Travel Agency</Link></p>
    </form>
    </div>
    <div>
      <Link 
      to='/signup'
      className = 'bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Sign in as User</Link  >
    </div>
  </div>
  )
}

export default Captainlogin