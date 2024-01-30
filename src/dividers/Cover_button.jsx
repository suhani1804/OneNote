import React from 'react'

const cover_button = (props) => {
  return (
    <div className='mt-4'>
      <button className='w-full flex items-center text-center justify-center rounded-md border-[1px] text-lg font-normal border-slate-500 py-4 px-56'><a href={props.link}>{props.title}</a></button>
    </div>
  )
}

export default cover_button
