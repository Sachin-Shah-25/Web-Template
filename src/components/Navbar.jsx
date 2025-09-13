import React from 'react'

function Navbar() {
  return (
    <div className='fixed z-[999] px-20 py-8 w-full flex justify-between items-center bg-zinc-800'>
      <div className="logo">
        <h1>SACHIN</h1>
      </div>
      <div className="links flex gap-10">
        {["Services","Our Work","about Us","Insights","Contact"].map((items,index)=>{
            return <a href="#" key={index} className={`text-lg font-light capitalize ${index===4 && "ml-32"} ` }>{items}</a>
        })}
      </div>
    </div>
  )
}

export default Navbar
