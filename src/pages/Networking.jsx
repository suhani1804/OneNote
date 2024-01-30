import React from 'react'
import Cover_button from '../dividers/Cover_button'
import { networking } from '../data'

const Networking = () => {
  return (
    <div className=' h-screen pt-24 flex items-center flex-col'>
      <h1 className='text-2xl mb-8 font-semibold' >Basic Concepts</h1>
      <div>
      {networking && networking.map((n) => (
        <Cover_button key={n.id} title={n.title} link={n.link} />
      ))}
      </div>
    </div>
  )
}

export default Networking
