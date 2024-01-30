import React from 'react'
import Cover_button from '../dividers/Cover_button'
import { mysql } from '../data'

const Mysql = () => {
  return (
    <div className='pb-12 pt-24 flex items-center flex-col'>
      <h1 className='text-2xl mb-8 font-semibold' >Basic Concepts</h1>
      <div>
      {mysql && mysql.map((n) => (
        <Cover_button key={n.id} title={n.title} link={n.link} />
      ))}
      </div>
    </div>
  )
}

export default Mysql
