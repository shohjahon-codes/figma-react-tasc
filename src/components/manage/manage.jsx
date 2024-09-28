import React from 'react'
import Buttons from '../buttons/buttons';

export default function Manage({props}) {
    console.log(props);
  return (
    <div className='flex-col md:flex-row flex gap-4'>
      <div className='flex flex-col gap-4'>
        <h1 className='text-4xl font-bold text-black w-full md:w-[70%]'>What’s different about Manage?</h1>
        <p className='text-[#242d5287]'>Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams. </p>
      </div>
      <div className='flex flex-col justify-center items-center gap-4 md:w-[80%] w-full'>
{
    props.map((item,index)=>{
        return (
            <div key={index} className='flex flex-col w-full gap-4 items-start justify-center'>
           <div className='flex items-center justify-center gap-4'>
           <Buttons value={item.btn}/>
            <h1 className='text-xl font-bold text-[rgba(36,45,82,1)]'>{item.title}</h1>
           </div>
            <p className=' text-[#242d5287] font-semibold'>{item.desc}</p>
            </div>
        )
    })
}
      </div>
    </div>
  )
}
