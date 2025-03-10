import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import logo from '/src/assets/logo2.png'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'



const CaptainSignup = () => {  

  const navigate = useNavigate()

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [firstName,setFirstName] =useState('')
  const [lastName, setLastName] = useState('')

  const [vehicleColor, setVehicleColor] = useState('')
  const [vehiclePlate, setVehiclePlate] = useState('')
  const [vehicleCapacity, setVehicleCapacity] = useState('')
  const [vehicleType, setVehicleType] = useState('')

  const {captain,setCaptain}= React.useContext(CaptainDataContext)

  const submitHandler = async (e) => {
    e.preventDefault()

    const captainData = {
      fullname:{
        firstname:firstName,
        lastname:lastName
      },
      email:email,
      password,
      vehicle:{
        color:vehicleColor,
        plate:vehiclePlate,
        vehicleType:vehicleType,
        capacity:vehicleCapacity
      }
    } 

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`,captainData)

    if(response.status === 201){
      const data = response.data
      setCaptain(data.captain)
      localStorage.setItem('token',data.token)
      navigate('/captain-home')
    }
    
    setEmail('')
    setFirstName('')
      setLastName('')
      setPassword('')
      setVehicleColor('')
      setVehiclePlate('')
      setVehicleCapacity('')
      setVehicleType('')
    
  }

  return (
<div className='p-5 pb-2 h-screen flex flex-col justify-between '>
      <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
         <img className='w-20 pb-5' src={logo} alt='logo'  />

         <h2 className='text-lg font-medium mb-1'>What's your name </h2> 
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

        <h4 className='text-lg font-medium mb-1'>Vehicle Details</h4> 
        <div className='flex gap-2 mb-5'>
          <input
            required
            className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base border-black'
            type="text"
            placeholder='Vehicle Color'
            value={vehicleColor}
            onChange={(e) => setVehicleColor(e.target.value)}
          />
          <input
            required
            className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base border-black'
            type="text"
            placeholder='Vehicle Plate'
            value={vehiclePlate}
            onChange={(e) => setVehiclePlate(e.target.value)}
          />
        </div>

        <div className='flex gap-2 mb-5'>
          <select
            required
            className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base border-black'
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
          >
            <option value="">Select Vehicle Type</option>
            <option value="car">Car</option>
            <option value="auto">Auto</option>
            <option value="moto">Moto</option>
          </select>
          <input
            required
            className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base border-black'
            type="number"
            placeholder='Seating Capacity'
            value={vehicleCapacity}
            onChange={(e) => setVehicleCapacity(e.target.value)}
          />
        </div>

        <button className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2  w-full text-lg placeholder:text-base '>
         Sign-up
        </button>

        <p  className='text-center '> Already have a account ? <Link to='/captain-login' className='text-blue-600'>Login here </Link></p>
      </form>
      </div>
      <div>
        
        <p className=' pb-5 text-[10px] leading-tight'>
          By proceeding, you consent to get calls , whatsapp or SMS messages,including by automated means , from Carva and it's affiliates to the number provided
        </p>
      </div>
    </div>
  )
}

export default CaptainSignup