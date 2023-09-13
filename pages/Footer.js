import React from 'react'

function Footer() {
  return (
    <div className=' w-full h-[20rem] border-t-2 border-gray-400 bg-[#FED049]'>
        <div className='flex space-x-10 mt-5'> 
            <div className=' w-[30%] ml-5'>
                <h1 className=' py-4 px-4 border-b-2 border-red-500 text-xl font-serif font-extrabold '>About Us</h1>
                <p>VEDA is dedicated to providing our members with a diverse array of exclusive multimedia content
                     for yoga, meditation, and mindful living. Yoga students, teachers, and aspiring teachers can expand their 
                     knowledge and deepen their practices with our classes, courses, and articles. Members can access their 
                     accounts on any device including phones, tablets, and TVs using Yoga International’s mobile and TV apps.</p>
            </div>
            <div className='w-[30%]'>
                <h1 className=' py-4 px-4 border-b-2 border-red-500 text-xl font-serif font-extrabold '>Address</h1>
                <div className='flex m-2'>
                    <img src="https://cdn-icons-png.flaticon.com/512/1198/1198464.png" alt="" className=' w-10 h-10'></img>
                    <p className=' p-2 text-base font-serif font-semibold '>Sector 62,Noida</p>
                </div>
                <div className='flex m-2'>
                    <img src="https://cdn-icons-png.flaticon.com/512/3014/3014736.png" alt="" className=' w-10 h-10'></img>
                    <p className=' p-2 text-base font-serif font-semibold '>+91-7668684210</p>
                </div>
                <div className='flex m-2'>
                    <img src="https://cdn-icons-png.flaticon.com/512/2374/2374449.png" alt="" className=' w-10 h-10'></img>
                    <p className=' p-2 text-base font-serif font-semibold '>1003akshatagg@gmail.com</p>

                </div>
            </div>
            <div className='w-[30%] flex flex-col mr-5'>
                <h1 className=' py-4 px-4 border-b-2 border-red-500 text-xl font-serif font-extrabold'>Contact Us</h1>
                <input placeholder='📩  Email' type="Email" className=' border-2 border-gray-300 my-4 rounded-md w-80 ml-4' ></input>
                <input type="text" placeholder="💬Message" className=' border-2 border-gray-300 my-4 rounded-md w-80 h-20 ml-4' ></input>
                <button className=' border-4 border-[#D2001A] w-[50%] mx-3 h-12 my-2 rounded-2xl font-serif font-bold text-lg text-[#D2001A] hover:bg-[#D2001A] hover:text-white'><p>Submit</p></button>
            </div>
        </div>
    </div>
  )
}

export default Footer