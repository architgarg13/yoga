import React from 'react'
import 'animate.css';


function NaviBar() {
  return (
    <div className=' flex bg-[#FFBF00] w-auto place-content-between h-16 py-2'>
        <div className=' flex ml-20 mr-10'>
            <div className='w-auto'>
                <p className=' text-4xl font-extrabold text-[#222222] font-serif flex p-1 cursor-pointer animate__animated animate__flip'><p className=' text-5xl'>V</p>EDA</p>
            </div>
            <div className=' p-1 pt-2 mx-4 ml-10'>
                <p className=' text-lg font-bold hover:-translate-y-1 cursor-pointer'>Yoga</p>
            </div>
            <div className=' p-1 pt-2 mx-4'>
                <p className=' text-lg font-bold hover:-translate-y-1 cursor-pointer'>Store</p> 
            </div>
            <div className=' p-1 pt-2 mx-4'>
                <p className=' text-lg font-bold hover:-translate-y-1 cursor-pointer'>About Us</p> 
            </div>
        </div>
        <div className=' mr-10 h-14 w-14 flex space-x-4'>
            <img src="https://cdn-icons-png.flaticon.com/512/2906/2906496.png" alt="" />
            <img src="https://cdn-icons-png.flaticon.com/512/2647/2647625.png" alt="" />
        </div>
        <div className=' flex mx-20 space-x-5'>
            <button className=' border-2 border-gray-300 mx-3 px-8 mt-1 hover:bg-[#FEFCF3] text-lg font-bold hover:border-gray-800 hover:text-[#ad8407] rounded-md'><p>Login</p></button>
            <button className=' border-2 border-gray-300 mx-3 px-8 mt-1 hover:bg-[#FEFCF3] text-lg font-bold hover:border-gray-800 hover:text-[#ad8407] rounded-md'><p>Signup</p></button>
        </div>
    </div>
  )
}

export default NaviBar