import React from 'react'

const home = () => {
  return (
    <div className=' h-screen flex justify-center items-center '>
      <div className=' w-[70%] flex items-center justify-center flex-col '>
        <h2 className='text-5xl font-serif text-start sm:mb-2 mb-8 sm:text-5xl font-medium'>Explore your domain with the help of the notes</h2>
        <p className=' mt-4 mb-4 text-xl text-start sm:text-center'> Are you also strugging to find easy to understand notes for revision ? Then you are at the perfect place. <br />Click on the button below</p>
        <button className='border-[1px] border-slate-800 text-lg rounded-xl px-4 py-2 hover:bg-slate-300 bg-slate-400 ease-in-out duration-200'><a href="./modem_router">Explore more</a></button>
      </div>
    </div>
  )
}

export default home
