import React from 'react'

function Cards() {
    return (
        <div className='w-full h-screen bg-zinc-900 flex gap-5 items-center px-32  bg-zinc-100'>
            <div className='cardcontainer h-[50vh] w-1/2'>
                <div className='card relative rounded-xl w-full h-full flex justify-center items-center  bg-[#004D43]'>

                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />

                    <button className="absolute px-5 py-1 rounded-full border-2 left-10 bottom-10">&copy;2025</button>
                </div>
            </div>
            <div className='cardcontainer flex gap-5 h-[50vh] w-1/2'>
                <div className='card relative flex justify-center items-center rounded-xl  w-full h-full  bg-[#192825]'>

                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />

                    <button className="absolute px-5 py-1 rounded-full border-2 left-10 bottom-10">&copy;2025</button>

                </div>
                <div className='card  relative flex justify-center items-center rounded-xl  w-full h-full  bg-[#192825]'>


                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />

                    <button className="absolute px-5 py-1 rounded-full border-2 left-10 bottom-10">&copy;2025</button>
                </div>
            </div>
        </div>
    )
}

export default Cards
