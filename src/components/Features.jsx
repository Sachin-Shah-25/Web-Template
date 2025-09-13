import React, { useState } from 'react'
import { motion, useAnimate, useAnimation } from 'framer-motion'
function Features() {
    const cards=[useAnimation(),useAnimation()]
 const handleHover=(index)=>{
    cards[index].start({y:"0"})

 }
  const handleHoverEnd=(index)=>{
    cards[index].start({y:"100%"})

 } 
 
 return (
        <div className='w-full py-20'>
            <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
                <h1 className='text-7xl tracking-tight'>
                    Featured Projects
                </h1>
            </div>
            <div className='px-20'>
                <div className="cards w-full flex gap-10 mt-10 ">
                    <motion.div 
                    onHoverStart={()=> handleHover(0)} 
                    onHoverEnd={()=> handleHoverEnd(0)} 
                    
                    className="cardcontainer relative w-1/2 h-[74vh]  rounded-xl ">
                    <h1 className='absolute flex -translate-x-1/2 top-1/2 -translate-y-1/2 left-full  z[9] text-8xl tracking-tighter leading-none overflow-hidden text-zinc-900'>
                     { "FYDE".split('').map((item,index)=>
                     <motion.span
                     initial={{y:"100%"}} 
                     animate={cards[0]}
                     transition={{ease:[0.22,1,0.36,1],delay:index*.2}}                   
                     className='inline-block'>{item}</motion.span>)}
                    </h1>
                        <div className='card w-full h-full rounded-xl overflow-hidden'>
                            <img src="https://ochi.design/wp-content/uploads/2022/06/Frame-3898-1-663x551.jpg" className='w-full h-full bg-cover' alt="" />
                        </div>
                    </motion.div>

                    <motion.div className="cardcontainer w-1/2 h-[74vh] relative  rounded-xl ">
                      <h1 className='absolute translate-x-1/2 top-1/2 -translate-y-1/2 right-full  z[9] text-8xl tracking-tighter leading-none text-zinc-900'>
                      { "".split('').map((item,index)=><span className=''>{item}</span>)}
                      </h1>
                        <div className='card w-full h-full rounded-xl  overflow-hidden'>
                            <img src="https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-663x551.png" className='w-full h-full bg-cover' alt="" />
                        </div>
                    </motion.div>
                </div>
            </div>

        </div>
    )
}

export default Features
