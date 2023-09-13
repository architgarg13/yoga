import React from 'react'

function Circles() {
  return (
    <div className=' w-full h-[40rem] bg-[#D9E4F5]'>
        <div className=''>
            <div className=' text-center h-[20%]'>
                <p className=' text-5xl font-semibold font-serif py-10 pb-20'>YOGA STANCES</p>
            </div>
            <div className=' flex justify-evenly h-[40%] mb-10'>
                <div className=' border-4 border-[#EB6440] rounded-full w-52 h-52 hover:bg-[#B6E2A1] animate-pulse '> 
                    <img src="https://cdn-icons-png.flaticon.com/512/2376/2376414.png" alt="" className=' w-40 h-40 m-5 '></img>
                </div>
                <div className=' border-4 border-[#EB6440] rounded-full w-52 h-52 hover:bg-[#B6E2A1] animate-pulse '>
                    <img src="https://cdn-icons-png.flaticon.com/512/2789/2789935.png" alt="" className=' w-40 h-40 m-5 '></img>

                </div>
                <div className=' border-4 border-[#EB6440] rounded-full w-52 h-52 hover:bg-[#B6E2A1] animate-pulse '>
                    <img src="https://cdn-icons-png.flaticon.com/512/6381/6381903.png" alt="" className=' w-40 h-40 m-5'></img>

                </div>
            </div>
            <div className=' flex justify-evenly h-[40%] mb-10'>
                <div className=' border-4 border-[#EB6440] rounded-full w-52 h-52 hover:bg-[#B6E2A1] animate-pulse '> 
                    <img src="https://cdn-icons-png.flaticon.com/512/2647/2647591.png" alt="" className=' w-40 h-40 m-5'></img>
                </div>
                <div className=' border-4 border-[#EB6440] rounded-full w-52 h-52 hover:bg-[#B6E2A1] animate-pulse '>
                    <img src="https://cdn-icons-png.flaticon.com/512/2789/2789833.png" alt="" className=' w-40 h-40 m-5'></img>

                </div>
                <div className=' border-4 border-[#EB6440] rounded-full w-52 h-52 hover:bg-[#B6E2A1] animate-pulse '>
                    <img src="https://cdn-icons-png.flaticon.com/512/3048/3048398.png" alt="" className=' w-40 h-40 m-5'></img>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Circles