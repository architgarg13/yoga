import React from 'react'

function Cards() {
  return (
    <div className='w-full h-[40rem] bg-gradient-to-t from-[#D9E4F5] to-[#FAF7F0]'>
        <div className='flex'>
            
            <div className=' bg-slate-100 h-[30rem] w-[25%] m-auto my-20 p-4 rounded-lg drop-shadow-2xl hover:scale-110 hover:ease-in hover:delay-200'>
                <div className='h-[50%] border-b-2 border-gray-500 rounded-md rounded-md border-2 border-black'>
                    <img src="https://images.indianexpress.com/2017/06/swami-vivekananda-1.jpg" alt="" className=' h-full' />
                </div>
                <div className=' my-2 mx-1'>
                    <p className=' text-sm font-bold font-serif mt-2'>"Through practice comes Yoga, through Yoga comes knowledge, through knowledge love, and through love bliss."</p>
                    <p className=' text-lg font-bold font-serif mt-12'>~ Swami vivekananda</p>
                    <p className=' text-sm font-bold font-serif pl-3'>Yoga Specialist</p>
                </div>
                <div className=''>
                    <button className=' border-4 border-[#D2001A] w-[90%] mx-3 h-12 my-2 rounded-2xl font-serif font-bold text-lg text-[#D2001A] hover:bg-[#D2001A] hover:text-white'><p>View more details</p></button>
                </div>
            </div>
            <div className=' bg-slate-100 h-[30rem] w-[25%] m-auto my-20 p-4 rounded-lg drop-shadow-2xl hover:scale-110 hover:ease-in hover:delay-200'>
                <div className='h-[50%] border-b-2 border-gray-500 rounded-md rounded-md border-2 border-black'>
                    <img src="https://filmfare.wwmindia.com/thumb/content/2022/jun/yogalessonsfromshilpashetty41655789397.jpg?width=1200&height=900" alt="" className=' w-full h-full' />
                </div>
                <div className=' my-2 mx-1'>
                    <p className=' text-sm font-bold font-serif'>"Yoga did not just help me with my body, I became fitter from within. It helped me to focus better. We may look very glamourous and fit, but believe me, not many are actually fit from within."</p>
                    <p className=' text-lg font-bold font-serif mt-2'>~ Shilpa Shetty</p>
                    <p className=' text-sm font-bold font-serif pl-3'>Yoga Trainer</p>
                </div>
                <div className=''>
                    <button className=' border-4 border-[#D2001A] w-[90%] mx-3 h-12 my-2 rounded-2xl font-serif font-bold text-lg text-[#D2001A] hover:bg-[#D2001A] hover:text-white'><p>View more details</p></button>
                </div>
            </div>
            <div className=' bg-slate-100 h-[30rem] w-[25%] m-auto my-20 p-4 rounded-lg drop-shadow-2xl hover:scale-110 hover:ease-in hover:delay-200'>
                <div className='h-[50%] border-b-2 border-gray-500 rounded-md rounded-md border-2 border-black'>
                    <img src="https://cdn.yehaindia.com/wp-content/uploads/2022/04/Cover.jpg" alt=""  />
                </div>
                <div className=' my-2 mx-1'>
                    <p className=' text-sm font-bold font-serif mt-2'>"Being a firm believer of the power of Yoga and everything natural. I was more than willing and happy to embrace Face Yoga which claimed to no just delay signs of ageing but also undo the damage done overtime."</p>
                    <p className=' text-lg font-bold font-serif mt-2'>~ Ritika Gupta</p>
                    <p className=' text-sm font-bold font-serif pl-3'>Face Yoga Specialist</p>
                </div>
                <div className=''>
                    <button className=' border-4 border-[#D2001A] w-[90%] mx-3 h-12 my-2 rounded-2xl font-serif font-bold text-lg text-[#D2001A] hover:bg-[#D2001A] hover:text-white'><p>View more details</p></button>
                </div>
            </div>
            
            
        </div>
    </div>
  )
}

export default Cards