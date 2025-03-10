import React, { useState,useContext } from 'react'
import logo from '/src/assets/logo2.png'
import { Link } from 'react-router-dom'
import { UserDataContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UserLogin = () => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [userData, setUserData] = useState({})

  const {user,setUser} = useContext(UserDataContext)
  const navigate = useNavigate()



  const submitHandler = async (e) => {
    e.preventDefault();
    

    const userData = {
    email : email,
    password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`,userData)

    if(response.status === 200){
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token',data.token)
      navigate('/home')
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

        <p  className='text-center '> New here ? <Link to='/signup' className='text-blue-600'>Create new account</Link></p>
      </form>
      </div>
      <div>
        <Link 
        to='/captain-login'
        className = 'bg-[#10b461] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Sign in as an Agent</Link  >
      </div>
    </div>
  )
}

export default UserLogin