import React from 'react'

export default function Said({cards}) {
    console.log(cards);
  return (
    <div className='flex flex-col gap-5'>
      <h1 className='text-4xl font-bold'>What they’ve said</h1>
      <div className='flex justify-center items-center flex-col md:flex-row '>
        {
            cards.map((item,index)=>{
                return <div key={index} className='flex flex-col justify-center items-center'>
                   <img src={item.img} alt="" className='w-[100px] rounded-full ' />
                   <p className='font-semibold text-xl text-gray-500'>{item.desc}</p>
                </div>
            })
        }
      </div>
    </div>
  )
}
