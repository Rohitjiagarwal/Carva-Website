import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import logo from '/src/assets/logo2.png'
import axios from 'axios'
import {UserDataContext} from '../context/UserContext'

const UserSignup = () => { 

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [firstName,setFirstName] =useState('')
  const [lastName, setLastName] = useState('')
 

  const navigate = useNavigate()

  const {user,setUser}= React.useContext(UserDataContext) 

  const submitHandler = async (e) => {
    e.preventDefault()
    const newUser =  {
      fullname:{
        firstname:firstName,
        lastname:lastName
      },
      email:email,
      password:password
      
    }

     const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser)

      if(response.status === 201){
        const data = response.data

        setUser(data.user)
        localStorage.setItem('token',data.token)
        navigate('/home')
      }
    setEmail('')
    setFirstName('')
      setLastName('')
      setPassword('')
    
  
  }
  return (
<div className='p-5 pb-2 h-screen flex flex-col justify-between '>
      <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
         <img className='w-20 pb-5' src={logo} alt='logo'  />

         <h2 className='text-lg font-medium mb-1'>What's you name </h2> 
       <div className='flex gap-2 mb-5' >
       <input
        required
        className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base border-black'
        type="text" placeholder='First name' 
        value={firstName}
        onChange={(e)=>{
          setFirstName(e.target.value)
        }}
        />

        <input
        required
        className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base border-black'
        type="text" placeholder='Last name'
        value={lastName}
        onChange={(e)=>{
          setLastName(e.target.value)
        }}
        />

        </div>  

        <h3 className='text-lg font-medium mb-1'>What's your email</h3>
        <input
        required
      
        className='bg-[#eeeeee] mb-5 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base border-black'
        type="email" placeholder='email@example.com'
        value={email}
        onChange={(e)=>{
          setEmail(e.target.value)
        }}
        />

        <h4 className='text-lg font-medium  mb-1'>Enter Password</h4>
        <input 
        required
       
        className='bg-[#eeeeee] mb-5 rounded-lg px-4 py-2  w-full text-lg placeholder:text-base border border-gray-900 ' type="password" placeholder='password' 
        value={password}
        onChange={(e)=>{
          setPassword(e.target.value)
        }}
        />

        <button className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2  w-full text-lg placeholder:text-base '>
          Create Account
        </button>

        <p  className='text-center '> Already have a account ? <Link to='/login' className='text-blue-600'>Login here </Link></p>
      </form>
      </div>
      <div>
        
        <p className=' pb-5 text-[10px] leading-tight'>
          By proceeding, you consent to get calls , whatsapp or SMS messages,includign by automated means , from Carva and it's affiliates to the number provided
        </p>
      </div>
    </div>
  )
}

export default UserSignup