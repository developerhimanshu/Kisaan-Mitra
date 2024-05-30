import React from 'react'
import { NavLink } from 'react-router-dom'
import {BiPhotoAlbum} from 'react-icons/bi'
import {IoSparkles} from 'react-icons/io5'

const Sidebar = () => {
  return (
    <div  className='bg-green-900 text-white h-[100vh] w-[20vw] flex flex-col items-center'>
        <NavLink to = "/">
        <h1 className='px-3 py-1 rounded-b-lg font-bold text-[2.5rem] w-full text-center'>Kisaan Mitra</h1>
        </NavLink>
        <div className='my-6 flex flex-col w-full gap-2'>
            <NavLink to="/predict"  className={({isActive})=>`flex items-center px-4 py-3 hover:bg-green-600/50 ${isActive?'bg-green-600/50':''} transition-all duration-300 rounded w-[80%] mx-8 gap-2`} >
                <BiPhotoAlbum className='text-white' size={25}/>
                <h1 className=' font-semibold text-xl'>Predict Disease</h1>
            </NavLink>
            <NavLink to="/aiChat"   className={({isActive})=>`flex items-center px-4 py-3 hover:bg-green-600/50 ${isActive?'bg-green-600/50':''} transition-all duration-300 rounded w-[80%] mx-8 gap-2`} >
                <IoSparkles size = {25} className='text-white'/>
                <h1 className='font-semibold text-xl'>AI Chat</h1>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar