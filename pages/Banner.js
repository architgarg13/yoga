import React from 'react'
function Banner() {
  return (
    <div className=' w-full h-[35rem] flex'>
            <div className=' w-[50%] text-center my-auto px-5'>
                <p className=' text-4xl text-[#FF6D02] font-bold font-serif italic py-4 '>Balance, Relax and be still.</p>
                <p className=' text-7xl font-bold font-sans text-center animate-pulse'>Balance your life.</p>
                <div className='px-10'>
                <p className='  text-lg leading-8 font-medium mt-10'>Yoga is an ancient art that connects the mind and body. It is an exercise that we perform by balancing the elements of our bodies. In addition, it helps us meditate and relax.</p>
                </div>
                </div>
            <div className='w-[40%] h-50 m-auto mx-10 px-20 animate__animated animate__rotateIn animate__slower'>
                <img src="https://zenomyoga.com.au/wp-content/uploads/2018/11/cropped-Zen-Om-Yoga-Icon-with-background.png?w=640" className=' rounded-full' alt="" /> 
            </div>
    </div>
  )
}

export default Banner