import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
           <h5  onClick={()=>{
          props.setVehiclePanel(false)
        }} className='p-3 w-full text-center absolute top-0' ><i className= ' text-3xl text-gray-400 ri-arrow-down-wide-line'></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>

        <div  onClick={()=>{
          props.setConfirmRidePanel(true)
          props.selectVehicle('auto')
        }} className='flex border-2 mb-2 active:border-black rounded-lg p-3 items-center justify-between w-full'>

                      <img className='h-12' src="https://i.pinimg.com/736x/c3/57/72/c357722dd0fa074d45d43657d7a53b58.jpg" alt="" />
            <div className='w-1/2'>
              <h4 className='font-medium text-lg '>Rakesh Travels <span><i className='ri-user-3-fill'></i>4</span></h4>
              <h5 className='text-sm'>10 mins away</h5>
              <p className='text-xs' >Comfortable, Spacious Rides</p>
            </div>
            <div>
            <h2 className='text-lg font-semibold'>₹{props.fare.auto}</h2>
            <h5> +Tolls</h5>
            </div>
        </div>

        <div  onClick={()=>{
          props.setConfirmRidePanel(true)
          props.selectVehicle('car')
        }} className='flex border-2 mb-2 active:border-black rounded-lg p-3 items-center justify-between w-full'>

                      <img className='h-10 ' src="https://auto.mahindra.com/on/demandware.static/-/Sites-mahindra-product-catalog/default/dw4b0c5e48/images/MRZO/xlarge/marazzo_3_white_900%20x%20439.png" alt="" />
            <div className='w-1/2'>
              <h4 className='font-medium text-lg '>Maahit Travels <span><i className='ri-user-3-fill'></i>7</span></h4>
              <h5 className='text-sm'>10 mins away</h5>
              <p className='text-xs' >Premium, More Space</p>
            </div>
            <div>
            <h2 className='text-lg font-semibold'>₹{props.fare.car}</h2>
            <h5> +Tolls</h5>
            </div>
        </div>

        <div  onClick={()=>{
          props.setConfirmRidePanel(true)
          props.selectVehicle('moto')
        }} className='flex border-2 mb-2 active:border-black rounded-lg p-3 items-center justify-between w-full'>

          <div className='flex items-center justify-between w-full'>
          <img className='h-12 w-35 ' src="https://imgd-ct.aeplcdn.com/664x415/cw/cars/discontinued/nissan/micra-2010-2013.jpg?q=80" alt="" />
            <div className='w-1/2'>
              <h4 className='font-medium text-lg '>Simar Travels <span><i className='ri-user-3-fill'></i>4</span></h4>
              <h5 className='text-sm'>10 mins away</h5>
              <p className='text-xs' >Affordable, Compact Rides</p>
            </div>
            <div>
            <h2 className='text-lg font-semibold'>₹{props.fare.moto}</h2>
            <h5> +Tolls</h5>
            </div>
          </div>
           
        

        </div>
    </div>
  )
}

export default VehiclePanel