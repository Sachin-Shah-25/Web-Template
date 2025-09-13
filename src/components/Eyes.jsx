import React, { useEffect, useState } from 'react'
import bg from "../assets/bg.png"
function Eyes() {
const[rotate,setRotate]=useState(0)
    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX
            let mouseY = e.clientY
            let deltaX = mouseX - window.innerWidth / 2
            let deltaY = mouseY - window.innerHeight / 2

            var angle = Math.atan2(deltaX, deltaY) * (180 / Math.PI)
            setRotate(angle-180)
        })
    })
    return (
        <div className='eyes w-full h-screen oveflow-hidden z-[-1]'>
            <div data-scroll  data-scroll-section data-scroll-speed="-.7" className='w-full h-full flex items-center justify-center'>
                <div className="relative w-[70vw] h-[40vw] bg-cover bg-center  bg-red-500 bg-[url('https://cdn.pixabay.com/photo/2017/03/28/12/11/chairs-2181960_640.jpg')]">
                    <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '>
                        <div className=' flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
                            <div className='w-2/3 h-2/3 relative rounded-full bg-zinc-900'>
                                <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg))`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10">
                                    <div className='w-10 h-10 rounded-full bg-zinc-100'></div>
                                </div>
                            </div>
                        </div>

                        <div className=' flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
                            <div className='w-2/3 h-2/3 relative rounded-full bg-zinc-900'>
                                <div className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10">
                                    <div className='w-10 h-10 rounded-full bg-zinc-100'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Eyes
