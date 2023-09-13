import React from 'react'

function poster() {
  return (
    <div className=' w-full h-[35rem] bg-gradient-to-b from-[#D9E4F5] to-[#d9e4f500] '>
        <div className=' flex'>
          <div className=' w-[40%] h-[80%] my-10 mx-20 p-10'>
              <img className=" w-[80%] h-[80%] p-5 rounded-2xl" src="https://img.freepik.com/free-vector/happy-international-yoga-day-beige-red-background-social-media-design-banner-free-vector_1340-20899.jpg?w=2000" alt="" />
            </div>
            <div className=' w-[40%] h-[80%] my-auto mx-auto'>
              <h1 className=' text-4xl font-serif font-extrabold py-5 '>International Yoga Day</h1>
              <p className=' text-xl font-sans font-semibold py-5'>International yoga day is celebrated on the 21st of June of every year. The first international yoga day was observed on 21st June 2015. It is celebrated on the 21st of June because it is said to be the longest day of the year in the Northern hemisphere and it shares special significance in many parts of the world. The initiative of international yoga day was proposed by the Prime Minister of India Narendra Modi during his speech at the United Nations General Assembly on 27th September 2014.</p>
            </div>
        </div>
    </div>
  )
}

export default poster