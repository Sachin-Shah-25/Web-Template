import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl
    rounded-tr-3xl text-black'>
      <h1 className='text-[3vw] leading-[3.5vw] tracking-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non ea reiciendis. Vero, doloremque culpa.</h1>

      <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a2b663]">
        <div className='w-1/2'>
        <h1 className='text-6xl'>Our approach :</h1>
        <button className='uppercase flex gap-10 items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white'>Read More

            <div className='w-2  h-2 bg-zinc-100 rounded-full'></div>
        </button>
        </div>
        <div className="w-1/2 rounded-3xl h-[60vh] bg-[#a2b663]"></div>
      </div>
    </div>
  )
}

export default About
